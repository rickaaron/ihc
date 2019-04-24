const SOCKET_PREFIX = 'SOCKET_';

// Getters
 
export const SESSION = 'session/SESSION';
export const SEARCHTEXT = 'search/SEARCHTEXT';
  
// Mutations
export const MUTATE_SET_SEARCHTEXT = 'search/MUTATE_SET_SEARCHTEXT';

export const MUTATE_UPDATE_SESSION = 'session/MUTATE_UPDATE_SESSION';
export const MUTATE_SET_SESSION = 'session/MUTATE_SET_SESSION';
export const MUTATE_DELETE_SESSION = 'session/MUTATE_DELETE_SESSION';
 
//----------------------------------------------------------------------------------//
  
export const MUTATE_ADD_CHAT = 'chat/MUTATE_ADD_CHAT';
export const MUTATE_ADD_MESSAGE = 'chat/MUTATE_ADD_MESSAGE';

export const MUTATE_ADD_NEW_MESSAGE = 'chat/MUTATE_ADD_NEW_MESSAGE';
 
// Actions

export const ADD_MESSAGE = SOCKET_PREFIX + 'CHAT_ADD_MESSAGE';
export const GET_CHATS_FIRST = 'chat/GET_CHATS_FIRST';
 
export const GET_FIRST_PURCHASES = 'purchases/GET_FIRST_PURCHASES';
export const GET_MORE_PURCHASES = 'purchases/GET_MORE_PURCHASES'; 
 

 