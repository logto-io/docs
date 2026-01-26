export const isHowToTutorial = (slug?: string): boolean => /^build-.+-with-.+$/.test(slug || '');
export const howToBasePath = 'how-to';
