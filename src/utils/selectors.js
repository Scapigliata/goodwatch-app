export const filterMovieByValue = (value, movies) => {
  if (movies.length === 0) {
      return [];
  }

  if (value === '') {
      return movies;
  }

  value = value.toLowerCase();

  return movies.filter(({ title, content }) => {
      const isMatchAgainstTitle = title && title.toLowerCase().includes(value);
      const isMatchAgainstContent = content && content.toLowerCase().includes(value);
      return isMatchAgainstTitle || isMatchAgainstContent;
  })
  .map((movie) => {
      var pattern = new RegExp(value, 'gi');
      return {
          ...movie,
          title: movie.title.replace(pattern, `<span>${value}</span>`),
          content: movie.content ? movie.content.replace(pattern, `<span>${value}</span>`) : ''
      }
  });
};