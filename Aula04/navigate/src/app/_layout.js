import { Stack } from "expo-router"

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title:"Tela Inicial",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"}
            }}>
            </Stack.Screen>

            <Stack.Screen name="users/index" options={{
                title:"Usuários",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"}
            }}>
            </Stack.Screen>

            <Stack.Screen name="products/[id]/index" options={{
                title:"Produtos",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"}
            }}>
            </Stack.Screen>


        </Stack>

    )
}