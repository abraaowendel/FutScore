import axios from "axios";

const baseURL = `https://api.api-futebol.com.br/v1`

const Api = {
    getChampionship: async () =>{
        try {
            const response = await axios.request(`${baseURL}/campeonatos`, 
                {
                    method: 'GET',
                    headers: {"Authorization": "Bearer test_8229100e720d88648d68becaaa03f0"}
                }
            )
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
export default Api;
