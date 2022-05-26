import { createStore, createEvent } from "effector";

import { ICharacter } from './../types/types';

//create store
export const $users = createStore<ICharacter[]>([]);

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