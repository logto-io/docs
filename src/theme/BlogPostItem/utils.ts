export const isHowToTutorial = (slug?: string): boolean => /^build-.+-with-.+$/.test(slug || '');
