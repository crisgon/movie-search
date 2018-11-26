const formatLang = languages => {
  const separator = languages.length > 1 ? ', ' : '';

  return languages.map(lang => lang.name).join(separator);
};

export default formatLang;
