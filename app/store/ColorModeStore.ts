import { create } from "zustand";

type State = {
  mode: boolean;
};

type Actions = {
  changeMode: (curMode: boolean) => void;
};

const useColorModeStore = create<State & Actions>((set) => ({
  mode: true,

  changeMode: (curMode) =>
    set(() => ({
      mode: curMode,
    })),
}));

export default useColorModeStore;
