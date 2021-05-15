export const state = () => ({
  locales: ['en', 'ja', 'zh'],
  locale: 'zh',
  dark: false,
  nya_mode: false
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
      localStorage.setItem('locale', state.locale);
    }
  },
  SET_DARK(state, dark) {
    state.dark = dark;
    localStorage.setItem('dark', state.dark);
  },
  set_nya_mode(state, nya_mode) {
    state.nya_mode = nya_mode;
    localStorage.setItem('nya_mode', state);
  }
};
export const getters = {
  get_nya_mode(state) {
    return state.nya_mode;
  }
};
