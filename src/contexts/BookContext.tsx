import { createContext, useState } from "react";

interface BookData {
  firstName: string;
  age: string;
  gender: string;
  skinColor: string;
  hairStyle: string;
  hairColor: string;
  eyeColor: string;
  glasses: string;
  theme: string;
  personalMsg: string;
}

export const BookContext = createContext<{
  bookData: BookData;
  familyMembers: string[];
  setFamilyMembers: (familyMember: string) => void;
  personalEvents: string[];
  setPersonalEvents: (personalEvent: string) => void;
  handleBookData: (name: string, value: string) => void;
}>({
  bookData: {
    firstName: "",
    age: "",
    gender: "",
    skinColor: "",
    hairStyle: "",
    hairColor: "",
    eyeColor: "",
    glasses: "",
    theme: "",
    personalMsg: "",
  },
  familyMembers: [],
  setFamilyMembers: () => {},
  personalEvents: [],
  setPersonalEvents: () => {},
  handleBookData: (name: string, value: string) => {},
});

export function BookContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [bookData, setBookData] = useState<BookData>({
    firstName: "",
    age: "",
    gender: "",
    skinColor: "",
    hairStyle: "",
    hairColor: "",
    eyeColor: "",
    glasses: "",
    theme: "",
    personalMsg: "",
  });
  const [familyMembers, setFamilyMembers] = useState<string[]>([]);
  const [personalEvents, setPersonalEvents] = useState<string[]>([]);

  function handleBookData(name: string, value: string) {
    setBookData({ ...bookData, [name]: value });
  }

  function handleAddFamilyMember(newFamilyMember: string) {
    setFamilyMembers((prevFamilyMembers) => {
      if (prevFamilyMembers.includes(newFamilyMember)) {
        return prevFamilyMembers;
      } else {
        return [...prevFamilyMembers, newFamilyMember];
      }
    });
  }

  function handleAddPersonalEvent(newPersonalEvent: string) {
    setPersonalEvents((prevEvent) => {
      if (prevEvent.includes(newPersonalEvent)) {
        return prevEvent;
      } else {
        return [...prevEvent, newPersonalEvent];
      }
    });
  }

  return (
    <BookContext.Provider
      value={{
        bookData,
        handleBookData,
        familyMembers,
        setFamilyMembers: handleAddFamilyMember,
        personalEvents,
        setPersonalEvents: handleAddPersonalEvent,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
