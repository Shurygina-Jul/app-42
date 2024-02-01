import { createStore, createEvent } from "effector";
import connectLocalStorage from "effector-localstorage";

import { ICharacter } from "types/types";

// eslint-disable-next-line no-console
const usersLocalStorage = connectLocalStorage("users").onError((err) => console.log(err));

//create store
export const $users = createStore<ICharacter[]>(usersLocalStorage.init([]));

//create events
export const update = createEvent<ICharacter>();

const updateStore = (state: ICharacter[], data: ICharacter) => {
  const userIndex = state.findIndex((user) => user.id === data.id);

  //если персонаж не выбран - добавить, если выбран удалить
  userIndex === -1 ? state.push(data) : state.splice(userIndex, 1);

  return [...state];
};

//subscribe
$users.on(update, updateStore);
$users.watch(usersLocalStorage);
