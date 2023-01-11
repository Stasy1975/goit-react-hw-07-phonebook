// export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
// export const selectStatusFilter = ({ filter }) => filter;
// export const selectFilteredContacts = ({ contacts, search }) => {
//     if (!search) {
//         return contacts.items
//     }
//     const lowerCase = search.toLowerCase();
//     const filterUser = contacts.items.filter(({ name, phone }) => {
//         const normalizeName = name.toLowerCase();
//         const normalizeNamber = phone.toLowerCase();
//       const result =
//         normalizeName.includes(lowerCase) ||
//         normalizeNamber.includes(lowerCase);
//       return result;
//     });
//     return filterUser;
//   };

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;