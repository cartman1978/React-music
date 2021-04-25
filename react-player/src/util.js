import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Heroes",
            info: "Inspired by the sight of Bowie's producer-engineer Tony Visconti embracing his lover by the Berlin Wall, the song tells the story of two lovers, one from East and one from West Berlin. Bowie's performance of Heroes on 6 June 1987, at the German Reichstag in West Berlin has been considered a catalyst to the later fall of the Berlin Wall.",
            cover:
                "https://img.discogs.com/2PTfWc6gRRt-74G67zRDc8nDzII=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-196343-1429047925-9185.jpeg.jpg",
            artist: "David Bowie",
            audio: "https://aws.lsd.cat/audio/lXgkuM2NhYI.mp3",
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
            audio: "https://aws.lsd.cat/audio/isCh4kCeNYU.mp3",
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
            audio: "https://aws.lsd.cat/audio/A1OqtIqzScI.mp3",
            color: ["#E50010", "#660900"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Heal The World",
            info: "Michael Jackson’s cry is to ‘heal the world.’ There are so many issues in the world at every corner of it. There is war, famine, poverty, hunger, disease, pollution, inequalities and the list goes on. Being ’empathetic’ is the solution to all this. We, as human beings, should be able to feel the pain of another human being. If we could do that, the world would be a much brighter place tomorrow.",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/51-Br34rPgL._SY355_.jpg",
            artist: "Michael Jackson",
            audio: "https://aws.lsd.cat/audio/BWf-eARnf6U.mp3",
            color: ["#0071F2", "#0081FD"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Masters of War",
            info: "Every line in this song is about how terrible these ‘masters of war’ are, and how Dylan can see through them, how he knows what they are doing in secret, how he hopes that they die and that Jesus doesn’t forgive everything they have done. Although this song was written during the time of the Vietnam War, the lyrics have been viewed as politically significant in many situations since then. Civilians continue to use this song in protests when they feel government authorities are misusing their power and that they are being treated unfairly.",
            cover:
                "https://i.redd.it/l6nezvviyeqy.jpg",
            artist: "Bob Dylan",
            audio: "https://aws.lsd.cat/audio/6ADrCw6LdLw.mp3",
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
            audio: "https://aws.lsd.cat/audio/dunKAwRN3P8.mp3",

        },
        {
            name: "Paname",
            info: "Paname is the story of two Parisian homeless people who for one night pretend to be revolutionaries and carry on on their struggle, writing on the walls and trying to destabilize the bored rich people of the French capital. The working class and poor in the early '900 called Paris 'Paname' and this way of calling it remained in use until today.",
            artist: "Litfiba",
            cover: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwkICAkJCAkICQoICBYICAcICBsKFQkWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5LisBCgoKDQ0ODw8PDjcZFRkrKzctKy0rKy0rLSsrKysrKystKysrKysrKysrLS0rKy0rKysrKysrLSsrKysrKysrK//AABEIANcA3AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABAEAACAQMDAgQEBAMGBAYDAAABAhEAAyEEEjEFQRMiMlEGFGFxI0KBoZHB0QcVM1JisTRT4fAWJENkcoImRGP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACMRAQEAAgICAwEAAwEAAAAAAAABAhESITFhA0FRExRxgQT/2gAMAwEAAhEDEQA/APVFSPsBxNIqOfc8UUTB/wBhUQs8xnn6UAHYIyCCexpbB/SiRGcn3+lNz7ZMiKAgEmOOZJNT2dgm6TMe9Tj96RmBg89qCRKe0c4E0thxCtB/MBuqcSZzxBkxFec/2qanUWNX00abU6rTeNorm82NU1kOd4AmDRrYteiKmeAZ4ERS2wYKEdgTiayvjC+1jo+t2a/+77lxFtW+olWYWjI5ZQSJgifrVL4W1V638MjUXdcnVLtlbxXU2Q2rCEEwpJAZtvv/AEmnobdLsHtwIOIinFuTAWfeBNcd8A/FGs6umqXqatddbltbF3QdNKraDAzuI4z71U/tX6pqdNpdHodNev6calbl7UtbBtm4FA2jf98x9qBa742iIlWX2kRTG0YkqRPBiK5z4T6Wmiv39XpX1w0ep6fZR+mauzdU2rq5ZlD8gg9u9ZHwXdZ/iLqtz+/R1Dxrdxl0LLdRj+IMsrgBSvED/pQN+Ond+DC5RoA3ElaSpIyOBxXlFq/b0Hx5cab1uxa6zcXwLG67ulDgIJmSeK9F6N13R9Ruaixp/mbOp0JA1fT9bpzp7lgHgx7fUUWFtp7B3AEnkGaYpPYHPcVn674g0Ok1Z0JbU6jW+F456boNE+qcL7mBA7cmo9F+JOm9Xe5Z0eob5mwC1/Q6mwdNctxg+U0jaYQAxgzwIiKW3HAGYJjisDrb9R1PxB03pul1Wp0uhfQXOo9SbSKEe7taAu/kSSOPr+mBreu9R6H8U2unJqtVrun6u5YHyOsb5hrfiGPI/qMc5/60xt6AEBjAyJEinKAGGAg4ApTtJEHBiT3qW77UhtE2kJys+aRB4qASDkcHGKKWP0iYYUiQcicYg0GHtxGM/wCniohFHYYPtxVm2yqMiZ7mo3HBHA+tBAbAT2yYOOaY2/v+houOMYPFTVccd/agKwiJzPsKgx4+vJFTHH6YNRMzP64EUGhP7ZJ96bI7jOYqZDT2zTZnEGfccUEcZAjn696lntmO3tUcSJjHeacY9/uBNAI/b9favNf7XAfmekj/ANlcE+34gr0vk/bkRxXK/GXwlf8AiC9prlvW6bSDS6drSJc0rXSxJDZyPanCq1/aFP8A4a6pHYWpjH/qLVP4EK/+EeNu0asMd27cfNmtj4k6XqOs9Lu6FLul076rYdRfNproEMG8o/TvUPhjotzpHTB0/UX7OsUXrji7Ztm1uV+QQaN9D7cn/ZJft2Om9WvXnS3btPYe5edtoQbDUv7ZRts9LBEQNQuDxhK1ui/BdzpnzmkTqFm70zXX7dy7p20ZN4hDhN+6OMEx2o/xv8L6j4jOmVNXpdJb0tu5tD6ZrzXGeJ7jGKPsr4dD00k6fQlmYzpbRkmZ8orz34Hb/wDL+ub2Yts1QDzz+MK7/ptrUWNLYtXm01y9Ysi0r2Qyo20YMHPaua+HvhPWdM6zqOqXdboby6wXl1GntaZ7ZUO27ykntFE+z14c1ps/2imQMdducj/QaJ1O+2n/ALRUdWuKW6nYs3PDb1q1tVI+2a6W98Gx1i91vTa5bWrPUvntPprljdbUbYZWgzkyZFH6Z8LsvWb3XOqXtNf1lxt2m0uktFLWk8oUHOWMD9z+j2WlK91jS6b4q1On6Vpr2u6v1FbfT9Te1Go8CxpPDWeYLH6/YCsP4V8Sx8eay1cNi49y7qrd1raEAHDeWZiug1PwjqrPxF/fnStXpEL3jqL2l6hYa4EZl2tG08c0Pp/wfrtB8Rf3tb12j1Fp7z3b6am0yXG8QefjEzxQNOr+dtNqz04XWt6o6H55URJKpu2yJxg1591nVD4W+KE1esQdXGssLqT1LWLGo0izsISITEf5R/M9Z1roWr1HVdF1npmstWNXoNMdGdLrLBuWtWhJkEjI5qnqvhS51Tq1rqfXb2mdNOiWdJ0jp6M6EAz53OWyZwB2/VG6poBOSQDO72pdpMc4mpEk8mZyaiCMcTzBpGR4xHPapKMdqQngx9JFSj37YoBiIjnntTHn6E4xUsD2pufb+lAQP0++RzU7Ule38Kb9BgwBzUk2gZnmgMn+9encf3j0ziQPn0E/vS/vLREf8f08zgRrk/rXiK213btoMkqECCRUdildoQc43rFTyPT2/wCf0R41uhn3+eT+tJdbpYH/AJvR+bI/84n9a8ONlSAu1BPplRmi/LAJvVV2gbyqp6KOQ09u+b0o51mi4iDrUH86l85pFGdZoecTrU/rXhp0wAk20x5mYgHdTLaVvyIfMCVFvcDRyGnufzumn/i9FHMHWpn96l87pu+s0METJ1qZ/evDRZXJCJIMKdmDPalctg5hPVhCvp+kUcg9xt63SmFXWaIycAa1CT+9EXU6eN/zOlIJ27vml5/jXhgtAyAgBBBAA9Jqxq9On92KUSwVtXdxZUBmjl6D2z5mwNv4+miYBOqXP70jetM3+NYgeoDULj968Guaa0Aj+RifUiqBBqxYdBu8dT4ZMl9vb70bD3QX7Mf4+nxn/iV/rQT1DR7ifnNFPBB1qf1r5+uspD27KhbRMEER4lBOjtgZt2+ZzbiaY0+iF12kP/7mi5kxrUMfvS+d00Y1Okycn51P6188/K2gJ8KyQfzBBUDprY/9OzhoMWxRsafRg1WmMRqdIcTjVKf51Iamz2v6YzyPmVP86+bjp7f/AC7UHE+GKb5e1/yrP3FsUG+lEu2/+dYM/wD91x+9TLp2e0fyj8YH+dfM/wAvaHFu2PeLYzR7RRcNbRgTOFimT6Sme6gj2uCkOxJWOcMDXz/bsae6TjdLwd6ZuCKtaWypPKFQIACRA+tTyXw9veftHvO4U43fT6ya8NNhymC+2YcnzbxSS3c3bFLMQu4EH9qXP0fD29zg/Tj1BqjB9sxMk814m9qAhQttJyd/FAuF9xDFlZcBgZ20c/Q/n7e57WzI+5olvcBG1v4V4KPHEtNwkcncc1p9Ke6bLF/ELNckmT7Cny9F/P2wvL5ztJWYJUTNMsncI2geVmiSacPO4wbgLHyAztqG8ydzHdty3G6p0k5SS25wGkMFUkRUlYkCZIA2wUnd9KdgFbao3LG0ENMU43LcQsVVgZTdmPrQCUEr5dvlbCCP1xUXj1bjgZZRuzU1UK3lIJWSSAT25pzlVgDxHEkkRuFIBb/KfWCTDE5BNFNwsu3c+W/EWYH3oamD5SQsZYZirNoWwVUFsHdbvgB930oASqqb5JuAOVJGJ+tXVLHQIFkqt4NctgTA/nQWcqo2gQl0oviDv7Vasbl0m4IqMTglpk0ErK+lDuuxxbJ3BtsbfeszXarxvIpPh2zCpt5onULxBKgv5hLbqoDCj65weaqQxBCDkbpk1IqTE5z2p9vBK8ifNiiraYtG05Pp2zTtMrdpdwZ9vlGEBiacBc4wMEETRls3JJ2ejyM5Hpoa7Q7FxleJWfvU7ORW2jIMbgNwjFV3SPaPoavNaBzbAAOTiYoN4b0kqFIMHPNOUrFT+tMf0pz9KarSs6W+wOzGTAPtWxpXUCSXby7ASe/9K55TBBHIMitXSsfWsblG4H6VOUXjWuCznzW/DYrBdRE/pU03IwLcKIUE7SaqguAPxQzFZKFvSKuWULOxt3rZEBjgCff9aysaw6+bcFQgBfMk+mqxYrvIIYKIabmasPbBIInBH59pYVWb1bjPOAB6fpQaGQ8QIZQyI4nd+taPT0/CbZaLAPBM8GBWcVZ4YkxJDNs9PtV/pblbJABw+SyjOB70ycjaZlY7WIPGDFWkcbQSXMYKg+qqY9ZI7HmKtWREyWwPbitHOOriQdxQbtyq2Kmlw+6yDlysxQrRLekHIg7jNPsDRtnygAzmaRl4jbuBkYUiKYPkshIWZBGSKmG2E7gVYGCkRtqIWVjMhZIPakEkuZhiQqjeARO6jG5jaDAY7lgRBoY2jnxBAkoFii2bYA3eXncu4TuEfvS2ErlyRiLWPxPDXxPufvRPEZ+nXjcO4C4BtYxspiE8qeIQ+9nUhdygRQeostjQWbUtuu3TdA2wAKAyLreI7OZy35qIgB28yMkgVBQcnGO4FHtl48sGVgn3qxoa2iEZYhQu4k5q5aWXNuQPPJk+r6zVNSJ/EDKNsEjtVrThG3bdpyAfw531nauLGxwjEhWEDxDaO/HvHvVO/GeCFJFuTM1cN7w0wANyTBbbtM5Wqeqv7neIVWuSdgmiGa3jYVgknYVJgU7mbYUrbUCSTEk0FnCCFnLSrcbqib3JxkZX1VWi2oMM/rUakxkk55k1GriKX8qu6BgdqkgSdpc1Sqzosl+MxJOYooxbCXiSrHMWytxBiDV9POuGCEDaFJ2xWdZYoZBVyTvUW8bKs2cnzkbWwU27ayreLLbYhwpLAyQYCGqm44kRtYBwWjcPeriwbSW2IO0bwCtUGtgnw9pBYzvtmZNKHU2dmVjILTlJjxIq705nFpgoJAeBuAEYHvWaq24yW/8AlxtrW6ba3W3KOwU3cDdt7CqhOMX1d89p5q3bg9uBkntVYCHMdvcTVq0Nqjy5naWFXXOkoUBccZkGaIEhQfMJO1QfzU9q21xGMjgEDdz+lHRGZLa+YM3mRt0CPaKi0wlLsyA7mIxbLJuirFq04IC3Ia40gIN0iKdUYqVgAXrknxG9UUim1SX8P/IVVvSfaggxZuXDbIYb2G9LYPpimb/EM4i55rSPB9NEVGdXcIqC2okAyRntR7tm6x3tp1eDvZxf3SI4mkZ/CPAKwbUC2GChgRWHr7iXLx2kFLai3bg+kVs6hDZ02pa1ae3FmA7Xdw+30YVzotMQWyQoyR3qoBwsjk5WYIqzbXYJKiWG4Me4qhad0YbZBHGatC8Xc3LhmeQB6qKcWVbeuJkidxG7NTIBgm1tCnaEDZQ+9DtarTi2VZWDmFLDzbqO13ROrbbrTzsuDmp/4pXuO/n8wBNyAu6QpodzcgZX2sSeYgL9atXbVkn8FhcUCQAYg0C6tsBDgswyFaZpwKp5OAIOECzNO5/Ln3Apm75jd5QgPFQYEdzkxNWkF/8AbAIM1Gn/AO5iKamkuKtdOYLdM7IjcQ/5qq0bSAG55mKgLOO9F+zn06Ay8g4l96MW9P0ijJf8zqFK7n2WnZaFphNvetl2B/Mp3FasJbIJLqQEMEKMLWLeCPtXCqSBmedtVmHh3JKq8Dezjy/rVu7Zi5t3BlIkBgVkUJ9MRuAQggQADO2jagPXgrkD1heav6K221yC5DXJBUR2FVtktJjAALTJWtPpdu8LTeEilfFyVbEwKJScEPWf9vetLTqQquWMKZDRI/jWdbI3mSBBySeK0kUqFyMLhAeK1ycy3ct7V352XWjdAb/b7UTwVthGcBtx8p2bS31AoKupUgNgW9ohS05nj3q+bthHS2t64ym2rbxb27azAJW2gDnc5W5DMDyvYzUGQubZdS5W6bZcrP2oibdqqDelgSWNvj7Cm3pxb8Zx44/GK5HsKAOLdt3SY83kVSsyO5ohs+G2xJcg7N5MR95obm2CHAvCGPnKTsqxa2jepdrTkxcQqW2/akYest77WpRiNpsBnG7b5vvXHwUAYg87QQ3FdN1LVBNLeMOxvD5dUuCPDIrmIIMYx+Uirxo0iWzI55knmnB/cyaIFD7UVBJaABRdTpvCC4OF82eKrcGlWadULYG0QeWMTSKQO/8ACnK7QuQwdd0KZ20wKlm9MCc8weBUncMvJx+VhQdzd5wY+1IvOZOT78Uj2IR5uRIWRiom2dpYxAOSe1OLhPLGAP40+dhJHlB7HigKx5P3pU/8zS/74ppN3j6T96s9ODG/5WCQpO8nigEsYmDAgQK1ejaZyC4RSSu4MW2wKWXiqxnca9lNu4hgu6HFhSfMIzVtUYOXRioI3FiINRSx5J8NdjPt3bt04q2ltFQrtuOCu1QTFYbdEgQtLO9mZFCbVXdw386HtYdy27hgatMo86hFUD8UsB3iq5a5tJO1itvYCOw9qagraAzD8HIPvVvRlmQnzerED6CqdtCCRCccD/atPSOERvQdzbvPcCxgdqcJ54nr/XI961rDh0CIDuYbQPTFZK+s8yMg1qaYAgwVBVdzZitMnIsoUJCooMGNjeYp71bbwJHh7re9wExHit7/AGqmFm4wtkMFXCsfD3UVAw5bdB3KGxtHvUGuDezF5EIC67j4fHeoWX47sX3mG9WKrfM29sowG4SBux9oprV5bJg3fy7ZVOPp/tSC4z22vjfINkC27W3B2/p9as7d4AILrcXcNp2+JWbePCLcACLv3qkR7ZqzfZLhYJueRIFq2RtNIKPxA0X9PakKtux4vOUrNK2yisblsEiC0zmrnxFcb5lLZnaNOIDQ0VnM5um2HZcsFEiJq9dQ4saLTszOcLkLJxmrY0vzGoKXiskSRuirzdMFu2l3x7Itq8+K7BgDWdea2N7eNlTIAxn2qN7X4Av6GDgBo8gVTHFU1BR1wRB2kg1oaTXIzrv3Z/L7E1fTTW5LqwMcIyzNVy15LUrELO5yGMyQTBmpGzbI3G2wkbVAaNtbV7T2UsDxHt22LFSFQA4rN1TKQNtzykAKS00TLYsU3QKMAzMwRzQ+OQPpI4pM0+5xGMbqhxETxNaINHJ5zJPFRzGJ5oh49px7zUtoJX2mLagxNMBMMd+Ymum6NZVbFsup2xD7jAXOKzem6ZLnUNNZa2txVYPcUjkd69EtdN0xWQDBO4bW2xis86fOYeWNbQEbTgMcqParCqrs0wPLO4+YVrjQWlzBBBwRgUx6ZY9myNoh4mslz/04/jMGnabgQHC5g7pFU7gQ7huwDG8CYrfbQWyhCM/2B4qvf6UpAIdlky4Yb5NB/wCR8dYewqN3mEtIH+atXSOq24JtgzO1hxTP0l9o2XBhsCOKsWdDf24jGDtH0qlf2w/Xl1v/ABO3HEc1v6HTK6I5tky07Ad2IrAt+v8AXsYroemofD3qu0qs7d3JrTJzi2tGouAbhtN7daUtvD4q/Z0ttFtOqq0DYXV8KKFYG15dwLbMX2uu4n2oxU3BscKC7SVUQLdZ7AD6RLkMqKMyC9pTu+9QTT2wMxta6A53AZmrUbUG12O4gHxCTFRgRCWVuBPILIG3eZo2EBoRvW2FMC4VMHfBq9oenlkUhDsYbjYeVM1d6foxuLvukGVUHbtrXVAoziRuBOKnkzyz0434v6Pt01vVKDNiEuED8vua465aNrPY5BH5q9Y6xpPmOn6q3gfh7kgzB7V5zsLKkkEscAZB96vHLW2nx3lj7U7OseywZZO0SoImKk2uS8H8eyCzJCPbOyDU20Y8MOVaScqr7oFR+TRm728Y35q94/i9VUtnb9x7HmtfQ9RS0Jdd20HyFomgHp62rasrly52Btu0A1S4bkzMnyxR1ROmvrdZau27YW3CxBC+bJPvWbfO6JIwI2xEUPxDkYIElZExUCc5jOTOacx0LSb6TgRJM02PrjsBNJW7GT3kYpL/AAnAiqScEDJmCKu6IL4gL7Li7sWyC9VrFvdif9WataFPxPOo9UEMI3VNvSpPDd6D06OrW7u4FWtMytxsFdzbhVWcAD0Ruiue+H0ZtTqL7ofDFtbFttpXdHNdHx9c7cZrLy5/l80hkCIwILRzUskARgDzLxTcFQZgmPLU8GIkyYOZpMqYycCOJJmJqBUDiYXC+aYqXfGCucjiolQTMCO+IimlGB2XgTMxFHtQQSYkmgn0iOAZKg80W2oInP8A9RQNvFQT4k/uMVt9PdyO3iWwGErun+lYiDz9snMitjQ7l27i/lfdbg4mtcnYvW9QWcKZZWBc2zZDRV2xdx5GUkJvYoA24VQW6Mt5lk7i6Etu7Z9qt6e4kBWcqWhB4YgHn+lZmLbIYShaQ3pZf8MTWj0vTbmXz7kLAiBMZqlp5BHqLPkgNv8ANW70/Ti3aUYBY+JdM7YrPKoyuou2hI5MFpE4xReTAgzgzUEGF2gYwDzFTBj2n8sYikwp94n3AEERMVwHVbFvQ6nwLgNpDf32bs7w08yK7y77kSCIIJ4rnPi3RWNQ6vft+tQtq7ujbRPLX4b3pzFwKGZRfsBQJFvxCd9Unch237rihJDgxFF13RLlm6E09zxt4xbC5H9aDd6XqtPY8W4VQk7RpmbzEe9bTj+ujtB9SDHGDBgbarXCsyoweAO1K5auJ6gBBgiaHn6+8VpInZ/4e+acc/7AdqbkcjJjaKU/fHEYpkl27ZMDzRSErMYBEEnM0x+sTE5PNOpENkAxzEzQBrLx2JniRNaXTbq233PtkHbLW94Wsq3JJE/cVoWQfIgfF1xa3lJ2E1GSo7zoKFdHYZ0CNfHjHw7m/dPetozIj3mDVTTWhbt2rYdn8G2FDsI3VZ9vo3Y1m5cvNPho9PnOFninPI49U4FMvuJ8xmT2qfbcB/8AEGkhEjK47yczNRMSMCYwDmiNgR5ceYZiKGoHOOMysUy0UnaeTJ4HaiWxI5jMRUE5lowMzijW2hcsvONwoLTxJD5zE/c1rdOv7WUeGpUjNyJLVkJhsdjWppbgBEqWAMBIma2ydkXReCW7lu4FyMFj4m7+FaAlVW2/y6zc/Dbw9vh/vVXTJtELbMtLqXQr2/lVpLgDAgyotyN35axptDpdrc5JUAK8ghNsV0FsDBM+VIg1mdJGywCfzPILGtIHbAwZEEkzurJjnexgJ9UmRKyaXM8cwd3eorEyQOIw2ac8ALGcY70IPuxgyYiSdtUerae3qNFfRvOfCLpHM9o/WrxxjGeScxUYAJDSA2DI3UznVjyu/rLtu6xS4eYYodsVUOuvZId9x5ctNX/iDRvo9W6XUaLjeLbuN+YGssooBmJOR5q6MZLI6bfCDuz+ZiWJ5YmaY0Q7RxPHeo84yZMADvVkb+P1zT9+P1NSZNp2mMHMdqh/Lj60A8+8/wAakjAEcHMkHvUP5nuYpx/0oA1u5kAjE8xMVudA8PU6zT2CqGLvjBisRFYFrkAR9JNdf8DaUG/f1Tq21LfhKSvIqMhbrGu0QKOIEDygiaIFzGQCeTioIo5Tygnzf6qnmIHtjMxWTl2cfrkwYHNTWDGRhoECox5u2e007E8iMGRImRQWyLfRmgwQRNRc5wB6eeKcz5vYHaXUc1Bj3Ef5RAiaBtIEbVA83sWzRrbsq43+Ybjt94qutyQQZwYGPTRrTNtwRAMDNMtvEl9WDEtye1aFiJzchN2Wmaz19U4wYiat25xuKgf5iJitq62jIKr+K7AyoDCRc/SrjrtW2p1UqWFpdqSENZtu+Rt3KpHHO0mtXRxcaxs8F1LTt35U+9ZZdG6vTWyiL6vRJZjNWgxjEnME+9BQ+YAkADzBieaJbIBgKTL7gAZisGFEQ8wRhZOZipyABEc+iKDJ77lg8ATFOfymJ80xHBp7ToUiYmc5AA5pjzO0kEZU0ihPbk4hopLkwJEGDJmgM7qWks6iF1NpL6CRsdPT+tcrrvhfSkbtPcvafMMn+Ko+1dteWQ7d42kMJiqN22rK4iQBO7bO2nLZ9tccnI/+EoEtryI/9rWJ1LQvo7z2y3iC2c3Rb216KYdVMAMbckbp3xWL1PRo+rK3FHg67T7brx6SOK0nyXfdXHEH9c+9L/uasa3R3NHeazdWCMo5Mi4OxFAXt/Ct5TIft7c045HOfamjH7VIL/pLSdoUD1GgLnT9O2rv29PaUlrpy/8AkXua9J6Pp7Ons+DZRVtoNojzb6yfhvpA6fp/FuqnzN9ZuOfN4Q7LXQabbaVRtG4r6gsbqwyy3fTPPL6GDA+0gbpJmpkKVIM5WeYoVtct9BMRxRicHGAJkidtJkQ4kEYP5hU4B/U5jvQxHfgeYgjipqx83qBPAIoTYbBk4E8d4ofE/TmRU2JE8fVR2pvSVMkwYDRE0y0gqgASZYjfMRRranaPKTOZ30PmMsYMLPaiKBGO2KNlp4muT9/pR7Z++BAgxQV9X2NTnjjJiK3diytxhI4DeonvXR/DVlbjG+VEIWAVREzXKKZbMgf5prtfhDzaViJE3tgWMH3rL5PA/XQIsieWBkpt3CKMhkBknH5tsTQgduRAAMNnip5JJVWw0MeIrnY2ibQ2So8hmJ3QacJ9hETmduaFMQP9WVBp1YOdwjPAPkigCkbTJAljCuScUgZgEEYwAJmnDSNsjMgmJioqSYyIY7RimEmmSSACRBYCKAyY7iMyTtK0ae8AE+mMTUX/ADCODDBhO6gA29Nc4BUq67ROIFVr2nMbnDkBwm22u6BWj/qIwRADVDecE++4xmmfJl9a6Pb11nw3ZFa2PwGBjwzXnmp0dyxcZLn4ZVoKtmK9W1t5baw4MkSEXvWJ1fQWdePGRfxF8pQiDcFXjlx/0vG/rz8W5/yiOCO9dB8H9O+Yv/N3QvhWPJY8Qbhcb3qg/Txe1tvR2riBr9zYAPyLXomg0tu1btWrKFbdm3t9931q8sulZXWjurblIkQNxYiaMBgxPsTtmKghNx2LR4Y8gUirCyN/PqkQ3IrOMajbE+qTP6TRS0ZbAI3GMTUVysjM8Emp4KDdkgbfMeKZG9OMHGWFSUjmAJ5g80Mny9sjJHepiDlY5gEdqEkwJBMnJyIyKgykcyCRyo5qbcAn0NhiDTEzu7EGICxFAMDPvg5IzU14/wClQwJ+nm8pyaIj7VAz9MU06eKqjmSqnBzBqJkUqVdDrIMRkT9wYrT6L1i902+G812wT/5jTbtv6j60qVTZuU3f6PV2tZYGpsNNtxuQuIP1q14ibxtgYwCs80qVclZWdp/mkLwwkzFOph4WMHJB9JpUqEkbmVJIk+oqImnW7BGfSOSJ3UqVAh1ckMMEAEhgYzxFJnWXBBBUbQJmlSqgbeSo2BxI2yW3TUS5Qbj6VPJzFKlShyOU6l8So124LauVJFpLj+wOf3oOh6hr309/U2dTYtJbuld1+wbhb24pUq0sba6gfROjaq9qLHU7upt23Go8ZraWZ7fw4rst7orEkGcoAIxT0qm3tGQloDaATuLL5iBFEttAOUPvK8UqVEZX7SVgxAIPmEkgxTk7QZiNu6ImaVKmRiRuEwuNo7xRF/KIiXjmaVKgHZliO4O3mh+rAMk5BiINKlQSKnzbcAFYeBwZwKLbKBR/SlSph//Z",
            id: uuidv4(),
            active: false,
            color: ["#BA4A46", "#FDF0DD"],
            audio: "https://aws.lsd.cat/audio/qBqgJUHIkXM.mp3",
        }
    ];
}

export default chillHop;