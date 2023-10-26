import { SquareAvatar, UserAvatar } from "@/components/common/UserAvatar"
import { useGetUser } from "@/hooks/useGetUser"
import { UserContext } from "@/utils/auth/UserProvider"
import { DMChannelListItem } from "@/utils/channel/ChannelListProvider"
import { IonTitle } from "@ionic/react"
import { useContext } from "react"


export const DirectMessageHeader = ({ channel }: { channel: DMChannelListItem }) => {

    const { currentUser } = useContext(UserContext)
    const user = useGetUser(channel.peer_user_id)

    const name = user?.name === currentUser ? `${user?.full_name} (You)` : user?.full_name ?? user?.name ?? 'Unknown User'
    return <DirectMessageHeaderUI name={name} image={user?.user_image} />
}
export const DirectMessageHeaderUI = ({ name, image }: { name: string, image?: string }) => {

    return (<IonTitle>
        <div className='flex flex-col items-center justify-start'>
            <div className='flex items-center justify-start'>
                <SquareAvatar src={image ? `${image}` : undefined} alt={name} />
                <h1 className='ml-2'>
                    {name}
                </h1>
            </div>
        </div>
    </IonTitle>)
}