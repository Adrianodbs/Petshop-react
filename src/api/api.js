import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'http://localhost:5000'
})

export const busca = async () => {
  // Para conseguir pegar os dados
  const resposta = await api.get(url)
  setDado(resposta.data)
}
