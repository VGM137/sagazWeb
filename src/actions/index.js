export const formChange = (payload) => ({
  type: 'FORM_CHANGE',
  payload,
});

export const clearForm = (payload) => ({
  type: 'CLEAR_FORM',
  payload,
});

export const visibleElement = (payload) => ({
  type: 'SET_VISIBILITY',
  payload
})