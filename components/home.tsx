import { useEffect, useState } from "react"


function HomePage() {
    const [myInfor, setMyInfor] = useState(null)

    useEffect(() => {
        async function fetchMyInfor(fields: string) {
            const token = await fetch(`https://graph.facebook.com/v21.0/oauth/authorize?client_id=${process.env.client_id}&scope=${process.env.scope}&response_type=token&redirect_uri=/`)
            const accessToken = await token.json()
            console.log(accessToken);

            const res = await fetch(`https://graph.facebook.com/me?fields=${fields}&access_token=${accessToken.access_token}`)
            const data = await res.json()
            setMyInfor(data)
        }

        fetchMyInfor('id,name')
    }, [])

    console.log(myInfor);


    return (
        <>
            <p className="text-white">Facebook Group Post</p>
            <div>
                <label>Content:</label>
                <textarea name="content" id="content" />
            </div>
            <div>
                <label>Images:</label>
                <input type="file" name="iamges" id="images" />
            </div>
            <div>
                <label>Group:</label>
                <input type="checkbox" name="group" id="group" />
            </div>
        </>
    )
}

export default HomePage