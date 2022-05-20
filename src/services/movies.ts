import { api } from "./api";
import { API_KEY } from '@env'
import { randomNumber } from "../utils/randomNumber";

import { 
  GET_POSTER_IMAGE, GET_TRENDING_MOVIES
} from "../constants/url";

export async function getPosterImage() {
  try {
    const { data } = await api.get(GET_POSTER_IMAGE(API_KEY));

    return data.results[randomNumber()]    
  } catch (error) {
    throw "Falha, tente novamente!";    
  }
}

export async function getTrendingMovie() {
  try {
    const { data } = await api.get(GET_TRENDING_MOVIES(API_KEY));

    return data.results    
  } catch (error) {
    throw "Falha, tente novamente!";    
  }
}