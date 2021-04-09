import axios from "axios";
import { IPicture } from "../redux/type";

export const getPODs = async () =>
  await axios.get<IPicture[]>("https://api.nasa.gov/planetary/apod?api_key=StqRajpk4aBXeC55B8LkyIQg1tuYnVhlXwugW5MI");
  

// <IPicture[]>
// https://jsonplaceholder.typicode.com/todos
// https://api.nasa.gov/planetary/apod?api_key=StqRajpk4aBXeC55B8LkyIQg1tuYnVhlXwugW5MI