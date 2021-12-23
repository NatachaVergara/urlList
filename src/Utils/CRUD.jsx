import { db } from '../firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'

export const handleSubmitAdd = async (url, name, description ) => {
    try {
        await addDoc(collection(db, 'links'), {
            url: url,
            name: name,
            description: description,
            created: Timestamp.now()
        })
       
    } catch (e) {
        alert(e)
    }
}

export const getLink = async (setLinks) => {
    
    const q = query(collection(db, 'links'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
        setLinks(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()

        })))
    })

}



