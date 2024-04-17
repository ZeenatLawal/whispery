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
  addFamilyMember: (familyMember: string) => void;
  removeFamilyMember: (familyMember: string) => void;
  personalEvents: string[];
  addPersonalEvent: (personalEvent: string) => void;
  removePersonalEvent: (personalEvent: string) => void;
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
  addFamilyMember: () => {},
  removeFamilyMember: () => {},
  personalEvents: [],
  addPersonalEvent: () => {},
  removePersonalEvent: () => {},
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

  function addFamilyMember(newFamilyMember: string) {
    setFamilyMembers((prevFamilyMembers) => {
      if (prevFamilyMembers.includes(newFamilyMember)) {
        return prevFamilyMembers;
      } else {
        return [...prevFamilyMembers, newFamilyMember];
      }
    });
  }

  function removeFamilyMember(familyMember: string) {
    const newFamArray = familyMembers.filter(
      (member) => member !== familyMember
    );
    setFamilyMembers([...newFamArray]);
  }

  function addPersonalEvent(newPersonalEvent: string) {
    setPersonalEvents((prevEvent) => {
      if (prevEvent.includes(newPersonalEvent)) {
        return prevEvent;
      } else {
        return [...prevEvent, newPersonalEvent];
      }
    });
  }

  function removePersonalEvent(personalEvent: string) {
    const newEventArray = personalEvents.filter(
      (event) => event !== personalEvent
    );
    setPersonalEvents([...newEventArray]);
  }

  return (
    <BookContext.Provider
      value={{
        bookData,
        handleBookData,
        familyMembers,
        addFamilyMember,
        removeFamilyMember,
        personalEvents,
        addPersonalEvent,
        removePersonalEvent,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
