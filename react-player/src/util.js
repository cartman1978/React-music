import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Heroes",
            info: "Inspired by the sight of Bowie's producer-engineer Tony Visconti embracing his lover by the Berlin Wall, the song tells the story of two lovers, one from East and one from West Berlin. Bowie's performance of Heroes on 6 June 1987, at the German Reichstag in West Berlin has been considered a catalyst to the later fall of the Berlin Wall.",
            cover:
                "https://img.discogs.com/2PTfWc6gRRt-74G67zRDc8nDzII=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-196343-1429047925-9185.jpeg.jpg",
            artist: "David Bowie",
            audio: "http://rocknation.su/upload/mp3/David%20Bowie/1977%20-%20Heroes/03.%20Heroes.mp3",
            color: ["#414141", "#636765"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Civil War",
            info: "Beyond all historical references lyrics take a clear and strong stance against any kind of war, which “feeds the rich while it buries the poor” and which goes on “as the years go by/With no love of God or human rights“.",
            cover:
                "https://img.discogs.com/LOwx-hDnJupe-OT2eEdjMCjtRxY=/fit-in/600x564/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5873918-1543543395-2269.jpeg.jpg",
            artist: "Guns N' Roses",
            audio: "https://media.hungama.com/c/4/baa/b95/58147195/58147195_128.mp3?uAOxRbPQthSemqDeahUkYmhBF_IeO6tZt-VqQKdKa4plRaBVnuW6sNdm7btruox0gAJwFIXivx2_lMWQHtZkN2PCxeUKP3saOI6RTG6X_WfFLUZx9EoMp15vCwQus8ZjP6CUEg",
            color: ["#930B0F", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Bang Bang",
            info: "Ryder is noted for his gruff, wailing singing style and his dynamic stage performances. He was influenced by his father, a musician. As a teenager, Ryder sang backup with a black soul-music group known as the Peps, but racial animosities interfered with his continued presence in the group",
            cover:
                "https://s.mxmcdn.net/images-storage/albums5/0/9/4/3/5/3/33353490_500_500.jpg",
            artist: "Mitch Ryder",
            audio: "https://ia802908.us.archive.org/17/items/bang-bang_202005/Bang%20Bang.mp3?cnt=0",
            color: ["#A15335", "#D4866A"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Holiday",
            info: "This is about the American government and society during the Iraqi War. It begins by commenting on how the thousands of dead Americans and Iraqis are nameless to the average American citizen. The song expresses resentment with the corporate greed and corruption involved in the rebuilding effort and shows how the average protester realizes that the pro-war money involved has more power than they can ever have.",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/61HZsw4F5VL._SL1425_.jpg",
            artist: "Green Day",
            audio: "https://ia800203.us.archive.org/28/items/03Holiday/03%20Holiday.mp3",
            color: ["#E50010", "#660900"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Highway To Hell",
            info: "Highway to hell was the nickname for the canning highway in australia. It runs from where lead singer bon scott lived in fremantle and ends at the pub called the raffles, which was a big rock and roll drinking hole in the '70s. As the canning highway gets close to the pub, it dips down into a steep decline: no stop signs...Speed limit Nobody gonna slow me down. So many people were killed by driving fast over that intersection at the top of the hill on the way to a good night out, that it was called the highway to hell, so when bon was saying im on the highway to hell it meant he was doing the nightly or weekly pilgramige down the canning highway to the raffles bar and rock and drink with his mates: aint nothing I would rather do. Going down, party time, my friends are gonna be there too.",
            cover:
                "https://rocknation.su/upload/images/albums/8.jpg",
            artist: "AC/DC",
            audio: "http://rocknation.su/upload/mp3/AC-DC/1979%20-%20Highway%20To%20Hell/01.%20Highway%20To%20Hell.mp3",
            color: ["#0071F2", "#0081FD"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Analyse",
            info: "In an interview given in 2001, Dolores said: Analyse is the typical song I wrote at my house with an acoustic guitar. It has that optimistic and happy sound. Is like waking up and say: This is going to be a great day.",
            cover:
                "https://rocknation.su/upload/images/albums/992.jpg",
            artist: "The Cranberries",
            audio: "http://rocknation.su/upload/mp3/The%20Cranberries/2001%20-%20Wake%20Up%20And%20Smell%20The%20Coffee/02.%20Analyse.mp3",
            color: ["#D4D4D4", "#EBEBEB"],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Imagine",
            info: "The concept of positive prayer. If you can imagine a world at peace, with no denominations of religion, without this my God-is-bigger-than-your-God thing, then it can be true.",
            cover: "https://www.abijahgupta.com/assets/images/john-lennon-imagine.gif",
            artist: "John Lennon",
            id: uuidv4(),
            active: false,
            color: ["#F97024", "#F19072"],
            audio: "http://rocknation.su/upload/mp3/John%20Lennon/1971%20-%20Imagine/01.%20Imagine%20-%20John%20Lennon.mp3",

        }

    ];
}

export default chillHop;