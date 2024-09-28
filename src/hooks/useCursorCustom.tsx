"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
type TVariant = "default" | "text" | "titleBanner";
interface IContext {
  initialCursorVariant: TVariant;
  setInitialCursorVariant: Dispatch<SetStateAction<TVariant>>;
  animateCursorVariant: TVariant;
  setAnimateCursorVariant: Dispatch<SetStateAction<TVariant>>;
  animateCursor: (variant: TVariant) => void;
}
const defaultContextValue: IContext = {
  initialCursorVariant: "default",
  setInitialCursorVariant: () => {},
  animateCursorVariant: "default",
  setAnimateCursorVariant: () => {},
  animateCursor: () => {},
};
const CursorContext = createContext<IContext>(defaultContextValue);
export const useCursorContext = () => useContext(CursorContext);
export const CursorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initialCursorVariant, setInitialCursorVariant] =
    useState<TVariant>("default");
  const [animateCursorVariant, setAnimateCursorVariant] =
    useState<TVariant>("default");
  // This function allows for smooth transitions between cursor states
  const animateCursor = (variant: TVariant) => {
    setInitialCursorVariant(animateCursorVariant);
    setAnimateCursorVariant(variant);
  };
  return (
    <CursorContext.Provider
      value={{
        initialCursorVariant,
        setInitialCursorVariant,
        animateCursorVariant,
        setAnimateCursorVariant,
        animateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
