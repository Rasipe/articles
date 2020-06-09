export const getArticles = () => {
  return fetch('/json/lista_exemplos.json', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
}

export const getArticleById = (id) => {
  return fetch(`/json/info_${id}.json`, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
}