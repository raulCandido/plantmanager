import AsyncStorage from "@react-native-async-storage/async-storage"
import { format } from "date-fns"

export interface PlantsProps{
    id: string,
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
        times: number
        repeat_every: string
    },
    dateTimeNotification: Date
}

export interface EnviromentProps {
    key: string
    title: string
}

interface StoragePlantProps {
    [id: string]:{
        data: PlantsProps
    }
}

export async function savePlant(plant: PlantsProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem("@plantmanager.plants")
        //O AsyncStorage por padrao tras todos os registros como textos
        //Dessa forma a conversao do objeto é efetuada para o StoragePlantProps
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

        const newPlant ={
            [plant.id]:{
               data: plant 
            }
        }

        await AsyncStorage.setItem("@plantmanager.plants",
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            }))

    } catch (error) {
        throw new Error(error)
    }
}

export async function loadPlantas(): Promise<PlantsProps[]> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager.plants");

    const plantsList = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const organizedListPlant = Object.keys(plantsList)
      .map((plant) => {
        return {
          ...plantsList[plant].data,
          hour: format(
            new Date(plantsList[plant].data.dateTimeNotification),
            "HH:mm"
          ),
        };
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 100 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 100)
        )
      )
    return organizedListPlant
  } catch (error) {
    throw new Error(error);
  }
}
