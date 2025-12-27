const scalesList = [
  {
    edo: 12,
    name: 'Dorian',
    steps: [2, 1, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 6,
    name: 'Vietnamese ditonic',
    steps: [1, 5],
    aliases: []
  },
  {
    edo: 6,
    name: 'Warao ditonic: South America',
    steps: [5, 1],
    aliases: []
  },
  {
    edo: 6,
    name: 'Messiaen truncated mode 6',
    steps: [1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 6,
    name: 'Messiaen truncated mode 6 inverse',
    steps: [2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 6,
    name: 'Whole-tone',
    steps: [1, 1, 1, 1, 1, 1],
    aliases: ['Messiaen mode 1', 'Raga Gopriya', 'Sehera', 'Anhemitonic Hexatonic']
  },
  {
    edo: 7,
    name: 'Thai mode 1',
    steps: [1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 7,
    name: 'Thai mode 2',
    steps: [1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 7,
    name: 'Thai mode 3',
    steps: [2, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 7,
    name: 'Thai mode 5',
    steps: [1, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 7,
    name: 'Thai mode 6',
    steps: [2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 8,
    name: 'Agmon Diatonic DS1',
    steps: [2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 8,
    name: 'Father-5',
    steps: [2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 9,
    name: 'Symmetrical Pentatonic',
    steps: [1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 9,
    name: 'Pelog Pancanada: Sunda',
    steps: [3, 1, 1, 3, 1],
    aliases: ['Mavila-5']
  },
  {
    edo: 9,
    name: 'Nine tone "Sorog": Sunda',
    steps: [3, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 9,
    name: 'Pelog Saptanada: Sunda',
    steps: [1, 2, 1, 1, 2, 1, 1],
    aliases: ['Mavila-7']
  },
  {
    edo: 9,
    name: 'Pelog Nawanada: Sunda',
    steps: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 9,
    name: 'August-6',
    steps: [2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 9,
    name: 'Pelogic-5',
    steps: [1, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 9,
    name: 'Pseudo Pelog',
    steps: [1, 1, 2, 1, 1, 1, 2],
    aliases: ['Pelogic-7', 'Antiionian']
  },
  {
    edo: 9,
    name: 'Noll Pseudo-diatonic',
    steps: [2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 10,
    name: 'Pelog Degung: Sunda',
    steps: [3, 1, 2, 3, 1],
    aliases: []
  },
  {
    edo: 10,
    name: 'Sorog Madenda: Sunda',
    steps: [3, 1, 3, 2, 1],
    aliases: []
  },
  {
    edo: 10,
    name: 'Pseudo Rast',
    steps: [2, 1, 1, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 10,
    name: 'Sethares Neutral',
    steps: [2, 1, 1, 2, 1, 2, 1],
    aliases: ['Beatles-7', 'Dichotic-7']
  },
  {
    edo: 10,
    name: 'Decibel-6',
    steps: [1, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 10,
    name: 'Lemba-6',
    steps: [2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 10,
    name: 'Supersharp-8',
    steps: [1, 1, 2, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 10,
    name: 'Yoyo & Latrizo-9',
    steps: [1, 1, 1, 1, 2, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 11,
    name: 'Joan-7',
    steps: [3, 1, 1, 3, 1, 1, 1],
    aliases: []
  },
  {
    edo: 11,
    name: 'Joan-9',
    steps: [2, 1, 1, 1, 2, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 11,
    name: 'Machine-5',
    steps: [2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Machine-6',
    steps: [2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Orgone-7',
    steps: [1, 2, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Sentry-5',
    steps: [1, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 11,
    name: 'Sentry-8',
    steps: [1, 1, 2, 1, 1, 2, 1, 2],
    aliases: ['Antidylathian']
  },
  {
    edo: 11,
    name: 'Superkleismic-7',
    steps: [2, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Schulter Hexatonic',
    steps: [2, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Swooning Rushes',
    steps: [2, 3, 1, 3, 2],
    aliases: []
  },
  {
    edo: 11,
    name: 'Quadriolic Diatonic',
    steps: [1, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Vietnamese ditonic',
    steps: [2, 10],
    aliases: []
  },
  {
    edo: 12,
    name: 'Honchoshi: Japan',
    steps: [5, 7],
    aliases: []
  },
  {
    edo: 12,
    name: 'Niagari: Japan',
    steps: [7, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Warao ditonic: South America',
    steps: [10, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Vietnamese tritonic',
    steps: [3, 2, 7],
    aliases: []
  },
  {
    edo: 12,
    name: 'Ute tritonic',
    steps: [3, 4, 5],
    aliases: ['Peruvian tritonic 2']
  },
  {
    edo: 12,
    name: 'Raga Malasri',
    steps: [4, 3, 5],
    aliases: ['Peruvian tritonic 1']
  },
  {
    edo: 12,
    name: 'Raga Bilwadala',
    steps: [4, 5, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Sarvasri',
    steps: [5, 2, 5],
    aliases: ['Warao tritonic: South America']
  },
  {
    edo: 12,
    name: 'Sansagari: Japan',
    steps: [5, 5, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Ongkari',
    steps: [6, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 5',
    steps: [1, 5, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 5 inverse',
    steps: [5, 1, 5, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 6',
    steps: [2, 4, 2, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 6 inverse',
    steps: [4, 2, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lavangi',
    steps: [1, 4, 3, 4],
    aliases: ['Gowleeswari']
  },
  {
    edo: 12,
    name: 'Warao tetratonic: South America',
    steps: [2, 1, 7, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Eskimo tetratonic (Alaska: Bethel)',
    steps: [2, 2, 3, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Vietnamese tetratonic',
    steps: [3, 2, 2, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Genus primum',
    steps: [2, 3, 2, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Haripriya',
    steps: [2, 3, 3, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Bhavani',
    steps: [2, 3, 4, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Sumukam',
    steps: [2, 4, 5, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Nigamagamini',
    steps: [4, 2, 5, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Mahathi',
    steps: [4, 3, 3, 2],
    aliases: ['Antara Kaishiaki']
  },
  {
    edo: 12,
    name: 'Bi Yu: China',
    steps: [3, 4, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Genus primum inverse',
    steps: [5, 2, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Han-kumoi: Japan',
    steps: [2, 3, 2, 1, 4],
    aliases: ['Raga Shobhavari', 'Sutradhari']
  },
  {
    edo: 12,
    name: 'Aeolian Pentatonic',
    steps: [2, 1, 4, 1, 4],
    aliases: ['Hira-joshi', 'Kata-kumoi', 'Yona Nuki Minor: Japan', 'Tizita Minor (Half tizita): Ethiopia']
  },
  {
    edo: 12,
    name: 'Anchi Hoye version 2: Ethiopia',
    steps: [1, 4, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Hon-kumoi-joshi',
    steps: [1, 4, 2, 1, 4],
    aliases: ['Sakura', 'Akebono II: Japan', 'Olympos Enharmonic', 'Raga Gunakri (Gunakali)', 'Latantapriya', 'Salanganata', 'Saveri', 'Ambassel: Ethiopia']
  },
  {
    edo: 12,
    name: 'Kokin-joshi',
    steps: [1, 4, 2, 3, 2],
    aliases: ['Miyakobushi', 'Han-Iwato', 'In Sen: Japan', 'Raga Bairagi', 'Lasaki', 'Vibhavari (Revati)']
  },
  {
    edo: 12,
    name: 'Iwato: Japan',
    steps: [1, 4, 1, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Scottish Pentatonic',
    steps: [2, 3, 2, 2, 3],
    aliases: ['Blues Major', 'Ritusen', 'Ritsu (Gagaku): Japan', 'Zhi', 'Zheng: China', 'Ujo', 'P\'yongjo: Korea', 'Bac: Vietnam', 'Lai Soutsanaen', 'Lai Po Sai', 'Lai Soi: Laos', 'Raga Arabhi', 'Devakriya', 'Durga', 'Jaldhar Kedar', 'Suddha Saveri', 'Ambassel Major: Ethiopia', 'Major complement']
  },
  {
    edo: 12,
    name: 'Major Pentatonic',
    steps: [2, 2, 3, 2, 3],
    aliases: ['Ryosen', 'Yona Nuki Major: Japan', 'Man Jue', 'Gong: China', 'Raga Bhopali (Bhup)', 'Bilahari', 'Deskar', 'Kokila', 'Jait Kalyan', 'Mohanam', 'Peruvian Pentatonic 1', 'Ghana Pentatonic 2', 'Tizita Major: Ethiopia']
  },
  {
    edo: 12,
    name: 'Suspended Pentatonic',
    steps: [2, 3, 2, 3, 2],
    aliases: ['Raga Madhyamavati', 'Madhmat Sarang (Madhumad Sarang)', 'Megh', 'Egyptian', 'Shang', 'Rui Bin', 'Jin Yu', 'Qing Yu: China', 'Yo: Japan', 'Ngu Cung Dao: Vietnam', 'Yematebela wofe: Ethiopia']
  },
  {
    edo: 12,
    name: 'Chaio: China',
    steps: [2, 3, 3, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Kung: China',
    steps: [2, 2, 2, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Altered Pentatonic',
    steps: [1, 4, 2, 2, 3],
    aliases: ['Raga Manaranjani II']
  },
  {
    edo: 12,
    name: 'Lydian Pentatonic',
    steps: [4, 2, 1, 4, 1],
    aliases: ['Raga Amritavarshini', 'Malashri', 'Shilangi', 'Bati Lydian: Ethiopia']
  },
  {
    edo: 12,
    name: 'Phrygian Pentatonic',
    steps: [1, 2, 4, 1, 4],
    aliases: ['Balinese Pelog', 'Madenda Modern', 'Raga Bhupalam', 'Bhupala Todi', 'Bibhas']
  },
  {
    edo: 12,
    name: 'Ionian Pentatonic',
    steps: [4, 1, 2, 4, 1],
    aliases: ['Raga Gambhiranata', 'Pelog Degung Modern', 'Ryukyu: Japan', 'Vong co: Vietnam', 'Bati Major: Ethiopia']
  },
  {
    edo: 12,
    name: 'Locrian Pentatonic 1',
    steps: [1, 2, 3, 2, 4],
    aliases: ['Raga Chhaya Todi']
  },
  {
    edo: 12,
    name: 'Minor Pentatonic',
    steps: [3, 2, 2, 3, 2],
    aliases: ['Blues Pentatonic', 'Raga Dhani (Suddha Dhanyasi)', 'Abheri', 'Udhayaravi Chandrika', 'Qing Shang', 'Gu Xian', 'Jia Zhong', 'Yu: China', 'P\'yongjo-kyemyonjo: Korea', 'Minyo: Japan', 'Lai Yai', 'Lai Noi: Laos', 'Nam', 'Northern Sa mac: Vietnam', 'Peruvian Pentatonic 2', 'Bati Minor: Ethiopia']
  },
  {
    edo: 12,
    name: 'Scriabin',
    steps: [1, 3, 3, 2, 3],
    aliases: ['Raga Dhanya Dhaivat', 'Jait', 'Rasika Ranjani', 'Vibhas (Marva)']
  },
  {
    edo: 12,
    name: 'Raga Abhogi',
    steps: [2, 1, 2, 4, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Amirkhani Kauns',
    steps: [4, 2, 1, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Audav Tukhari',
    steps: [2, 1, 2, 3, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Bhinna Shadja',
    steps: [4, 1, 4, 2, 1],
    aliases: ['Kaushikdhvani', 'Hindolita']
  },
  {
    edo: 12,
    name: 'Raga Bhupeshwari',
    steps: [2, 2, 3, 1, 4],
    aliases: ['Janasammodini']
  },
  {
    edo: 12,
    name: 'Raga Budhamanohari',
    steps: [2, 2, 1, 2, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Marga Hindola',
    steps: [3, 2, 4, 2, 1],
    aliases: ['Rajeshwari']
  },
  {
    edo: 12,
    name: 'Raga Chandrakauns (Chandrakosh) (modern',
    steps: [3, 2, 3, 3, 1],
    aliases: ['Kiravani)']
  },
  {
    edo: 12,
    name: 'Raga Audav Bageshri',
    steps: [3, 2, 4, 1, 2],
    aliases: ['Chandrakauns (old', 'Kafi)', 'Sundarkauns', 'Surya', 'Varamu']
  },
  {
    edo: 12,
    name: 'Raga Chandraprabha',
    steps: [2, 3, 3, 3, 1],
    aliases: ['Priyadharshini']
  },
  {
    edo: 12,
    name: 'Raga Chitthakarshini',
    steps: [1, 2, 2, 3, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Desh',
    steps: [2, 3, 2, 4, 1],
    aliases: ['Tcherepnin Major Pentatonic', 'Nam xuan: Vietnam']
  },
  {
    edo: 12,
    name: 'Raga Deshgaur (Desh Gaud)',
    steps: [1, 6, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Devaranjani (Devaranji)',
    steps: [5, 2, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Devshri',
    steps: [2, 4, 1, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Dhavalashri',
    steps: [4, 2, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Gauri',
    steps: [1, 4, 2, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Girija',
    steps: [4, 1, 3, 3, 1],
    aliases: ['Bacovia: Romania', 'Bati Major sharp 5: Ethiopia']
  },
  {
    edo: 12,
    name: 'Raga Guhamanohari',
    steps: [2, 3, 4, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Gyankali',
    steps: [1, 4, 3, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Hamsadhvani (Hansadhwani',
    steps: [2, 2, 3, 4, 1],
    aliases: ['Haunsdhwani)']
  },
  {
    edo: 12,
    name: 'Raga Harikauns',
    steps: [3, 3, 2, 2, 2],
    aliases: ['Tivrakauns', 'Chin: China']
  },
  {
    edo: 12,
    name: 'Raga Hindol (Sunada Vinodini)',
    steps: [4, 2, 3, 2, 1],
    aliases: ['Sanjh ka Hindol']
  },
  {
    edo: 12,
    name: 'Raga Jayakauns',
    steps: [3, 2, 1, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kalawati',
    steps: [4, 3, 2, 1, 2],
    aliases: ['Valaji']
  },
  {
    edo: 12,
    name: 'Raga Khamaji Durga',
    steps: [4, 1, 4, 1, 2],
    aliases: ['Rupeshwari']
  },
  {
    edo: 12,
    name: 'Raga Kokil Pancham',
    steps: [3, 2, 2, 1, 4],
    aliases: ['Blues Aeolian Pentatonic I']
  },
  {
    edo: 12,
    name: 'Raga Kshanika',
    steps: [1, 4, 3, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kumarapriya',
    steps: [1, 1, 6, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kumurdaki (Kumudaki)',
    steps: [2, 2, 2, 5, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kuntvarali (Kuntalavarali)',
    steps: [5, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Blues Minor',
    steps: [3, 2, 3, 2, 2],
    aliases: ['Raga Malkauns (Malakosh)', 'Raga Hindola', 'Man Gong', 'Quan Ming', 'Yi Ze', 'Jiao: China', 'Shegaye: Ethiopia']
  },
  {
    edo: 12,
    name: 'Raga Lilavati',
    steps: [3, 4, 2, 1, 2],
    aliases: ['Blues Dorian Pentatonic']
  },
  {
    edo: 12,
    name: 'Raga Mamata',
    steps: [4, 3, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Manaranjani I',
    steps: [1, 3, 3, 3, 2],
    aliases: ['Sundarkali']
  },
  {
    edo: 12,
    name: 'Raga Matha Kokila (Matkokil)',
    steps: [2, 5, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Megharanjani',
    steps: [1, 3, 1, 3, 4],
    aliases: ['Syrian Pentatonic']
  },
  {
    edo: 12,
    name: 'Raga Megharanji (Megh Ranjani)',
    steps: [1, 3, 1, 6, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Mohanangi',
    steps: [3, 1, 3, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Multani',
    steps: [3, 3, 1, 4, 1],
    aliases: ['Anchi Hoye version 1', 'Bati Minor sharp 4: Ethiopia']
  },
  {
    edo: 12,
    name: 'Raga Nabhomani',
    steps: [1, 1, 4, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Nagasvaravali (Naag Saravali)',
    steps: [4, 1, 2, 2, 3],
    aliases: ['Raga Mand', 'Bulgarian']
  },
  {
    edo: 12,
    name: 'Raga Nata',
    steps: [3, 2, 2, 4, 1],
    aliases: ['Udayaravicandrika', 'Madhuranjani']
  },
  {
    edo: 12,
    name: 'Raga Neroshta',
    steps: [2, 2, 5, 2, 1],
    aliases: ['Adbhut Kalyan']
  },
  {
    edo: 12,
    name: 'Raga Purnalalita',
    steps: [2, 1, 2, 2, 5],
    aliases: ['Chad Gadya (Khad Gadyo): Jewish', 'Ghana Pentatonic 1', 'Nando-kyemyonjo: Korea']
  },
  {
    edo: 12,
    name: 'Raga Puruhutika',
    steps: [5, 2, 2, 2, 1],
    aliases: ['Purvaholika']
  },
  {
    edo: 12,
    name: 'Raga Putrika',
    steps: [1, 1, 6, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rasranjani (Rasaranjani)',
    steps: [2, 3, 4, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Reva',
    steps: [1, 3, 3, 1, 4],
    aliases: ['Revagupti', 'Ramkali', 'Vibhas (Bhairava)']
  },
  {
    edo: 12,
    name: 'Raga Rukmangi',
    steps: [1, 2, 4, 3, 2],
    aliases: ['Bairagi Todi']
  },
  {
    edo: 12,
    name: 'Raga Samudhra Priya',
    steps: [3, 3, 1, 3, 2],
    aliases: ['Chandramadhu', 'Madhukauns (pentatonic)']
  },
  {
    edo: 12,
    name: 'Raga Saugandhini',
    steps: [1, 5, 1, 1, 4],
    aliases: ['Yashranjani']
  },
  {
    edo: 12,
    name: 'Raga Shailaja',
    steps: [3, 4, 1, 2, 2],
    aliases: ['Varini', 'Blues Aeolian Pentatonic II']
  },
  {
    edo: 12,
    name: 'Raga Shri Kalyan',
    steps: [2, 4, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Shubravarni',
    steps: [2, 4, 3, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Vaijayanti',
    steps: [2, 4, 1, 4, 1],
    aliases: ['Hamsanada']
  },
  {
    edo: 12,
    name: 'Raga Zilaf',
    steps: [4, 1, 2, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Dominant Pentatonic',
    steps: [2, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Dorian Pentatonic',
    steps: [2, 1, 4, 2, 3],
    aliases: ['Raga Sivaranjini (Shivaranjani)', 'Akebono I: Japan']
  },
  {
    edo: 12,
    name: 'Mixolydian Pentatonic',
    steps: [4, 1, 2, 3, 2],
    aliases: ['Nam ai', 'Oan: Vietnam', 'Raga Savethri']
  },
  {
    edo: 12,
    name: 'Locrian Pentatonic 2',
    steps: [3, 1, 2, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Minor added Sixth Pentatonic',
    steps: [3, 2, 2, 2, 3],
    aliases: ['Kyemyonjo: Korea']
  },
  {
    edo: 12,
    name: 'Whole-tone',
    steps: [2, 2, 2, 2, 2, 2],
    aliases: ['Messiaen mode 1', 'Raga Gopriya', 'Anhemitonic Hexatonic']
  },
  {
    edo: 12,
    name: 'Lydian Hexatonic',
    steps: [2, 2, 3, 2, 2, 1],
    aliases: ['Raga Kumud', 'Kesari Kalyan', 'Sankara (Shankara)', 'Prabhati']
  },
  {
    edo: 12,
    name: 'Mixolydian Hexatonic',
    steps: [2, 3, 2, 2, 1, 2],
    aliases: ['P\'yongjo: Korea', 'Yosen: Japan', 'Raga Darbar', 'Narayani', 'Suposhini', 'Andolika', 'Gorakh Kalyan', 'Durgawati', 'Rakta Hauns', 'Scottish gapped A scale']
  },
  {
    edo: 12,
    name: 'Phrygian Hexatonic',
    steps: [3, 2, 2, 1, 2, 2],
    aliases: ['Raga Desya Todi', 'Gopikavasantam (Gopika Basant)', 'Jayantasri', 'Pancham Malkauns']
  },
  {
    edo: 12,
    name: 'Arezzo Major Diatonic Hexachord',
    steps: [2, 2, 1, 2, 2, 3],
    aliases: ['Guidonian Hexachord', 'Scottish Hexatonic', 'Raga Kambhoji', 'Devarangini', 'Hem Kalyan', 'Pratapavarali', 'Sama (Syama)']
  },
  {
    edo: 12,
    name: 'Minor Hexatonic',
    steps: [2, 1, 2, 2, 3, 2],
    aliases: ['Raga Manirangu', 'Nayaki', 'Palasi', 'Pushpalithika (Puspalatika)', 'Suha Kanada', 'Nayaki Kanada', 'Gaudgiri Malhar', 'Suha Sughrai', 'Yo: Japan', 'Eskimo Hexatonic 1 (Alaska: King Island)']
  },
  {
    edo: 12,
    name: 'Locrian Hexatonic',
    steps: [1, 2, 2, 3, 2, 2],
    aliases: ['Ritsu: Japan', 'Raga Suddha Todi']
  },
  {
    edo: 12,
    name: 'Prometheus (Scriabin)',
    steps: [2, 2, 2, 3, 1, 2],
    aliases: ['Mystic', 'Raga Barbara']
  },
  {
    edo: 12,
    name: 'Prometheus Neapolitan',
    steps: [1, 3, 2, 3, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Blues scale I',
    steps: [3, 2, 1, 1, 3, 2],
    aliases: ['Raga Madhusurawali', 'Nileshwari']
  },
  {
    edo: 12,
    name: 'Blues Aeolian Hexatonic',
    steps: [3, 2, 1, 1, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Blues Minor Major 7',
    steps: [3, 2, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Blues Pentachordal',
    steps: [2, 1, 2, 1, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Eskimo Hexatonic 2 (Alaska: Point Hope)',
    steps: [2, 2, 2, 2, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Hawaiian',
    steps: [2, 1, 4, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Honchoshi plagal form: Japan',
    steps: [1, 2, 2, 1, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Pyramid Hexatonic',
    steps: [2, 1, 2, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Istrian: Croatia',
    steps: [1, 2, 1, 2, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Double-Phrygian Hexatonic',
    steps: [1, 2, 2, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Lixian',
    steps: [1, 5, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Schoenberg Signature Hexachord',
    steps: [1, 1, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Glinka\'s Scale',
    steps: [2, 1, 2, 2, 1, 4],
    aliases: ['Raga Adi Bhairavi']
  },
  {
    edo: 12,
    name: 'Raga Amarasenapriya',
    steps: [2, 1, 3, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Bagesri',
    steps: [2, 1, 2, 4, 1, 2],
    aliases: ['Sriranjani', 'Kapijingla', 'Jayamanohari']
  },
  {
    edo: 12,
    name: 'Raga Bangal Bhairav',
    steps: [1, 3, 1, 2, 1, 4],
    aliases: ['Geyahejjajji', 'Kannadabangala', 'Malahari', 'Purna Pancama']
  },
  {
    edo: 12,
    name: 'Raga Bauli',
    steps: [1, 3, 3, 1, 3, 1],
    aliases: ['Prabhavati', 'Shreetank', 'Triveni']
  },
  {
    edo: 12,
    name: 'Raga Bhanumanjari',
    steps: [3, 1, 1, 2, 3, 2],
    aliases: ['Jog']
  },
  {
    edo: 12,
    name: 'Raga Bhavani',
    steps: [1, 2, 3, 2, 2, 2],
    aliases: ['Mangal Gujari']
  },
  {
    edo: 12,
    name: 'Raga Bhinna Pancama',
    steps: [2, 3, 2, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Brindabani Sarang',
    steps: [2, 3, 2, 3, 1, 1],
    aliases: ['Megh (Megh Malhar)']
  },
  {
    edo: 12,
    name: 'Raga Caturangini',
    steps: [2, 2, 2, 1, 4, 1],
    aliases: ['Ratnakanthi']
  },
  {
    edo: 12,
    name: 'Raga Chandrajyoti',
    steps: [1, 1, 4, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Chandra Kalyan',
    steps: [1, 5, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Chandrika',
    steps: [2, 3, 2, 2, 2, 1],
    aliases: ['Nagagandhari']
  },
  {
    edo: 12,
    name: 'Raga Dhavalangam',
    steps: [1, 3, 2, 1, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Din ki Puriya',
    steps: [1, 3, 2, 2, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Dipak',
    steps: [2, 2, 1, 1, 1, 5],
    aliases: []
  },
  {
    edo: 12,
    name: 'Terpander Scale',
    steps: [1, 2, 2, 2, 3, 2],
    aliases: ['Raga Gandharavam', 'Sabai silt: Ethiopia']
  },
  {
    edo: 12,
    name: 'Raga Gaula (Gowlai)',
    steps: [1, 3, 1, 2, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Ghantana',
    steps: [2, 1, 2, 3, 3, 1],
    aliases: ['Kaushiranjani (Kaishikiranjani)']
  },
  {
    edo: 12,
    name: 'Raga Gurjari Todi',
    steps: [1, 2, 3, 2, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Hamsanandi',
    steps: [1, 3, 2, 3, 2, 1],
    aliases: ['Marva', 'Pancama', 'Puriya', 'Sohni (Sohoni)']
  },
  {
    edo: 12,
    name: 'Raga Hamsa Vinodini',
    steps: [2, 2, 1, 4, 2, 1],
    aliases: ['Uday Ravi Chandrika']
  },
  {
    edo: 12,
    name: 'Raga Hari Nata',
    steps: [4, 1, 2, 2, 2, 1],
    aliases: ['Genus secundum']
  },
  {
    edo: 12,
    name: 'Raga Hejjajji',
    steps: [1, 3, 2, 2, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Hemshri',
    steps: [3, 2, 2, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Imratkauns',
    steps: [2, 2, 1, 3, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jaganmohanam',
    steps: [2, 4, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jait',
    steps: [1, 1, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jaiwanti',
    steps: [1, 2, 3, 1, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Janasamohini (Jansammohini)',
    steps: [2, 2, 3, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jayant',
    steps: [3, 2, 2, 2, 1, 2],
    aliases: ['Malavasri', 'Manohari', 'Udan Chandrika', 'Blues Dorian Hexatonic']
  },
  {
    edo: 12,
    name: 'Raga Jivantika',
    steps: [1, 4, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jivantini',
    steps: [3, 3, 1, 3, 1, 1],
    aliases: ['Gaurikriya']
  },
  {
    edo: 12,
    name: 'Raga Jogeshwari',
    steps: [3, 1, 1, 4, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Jyoti',
    steps: [4, 2, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kalagada (Kalgada)',
    steps: [1, 3, 3, 1, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kalakanthi',
    steps: [1, 4, 2, 1, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kalavati',
    steps: [1, 3, 1, 2, 2, 3],
    aliases: ['Mangal Bhairav', 'Ragamalini']
  },
  {
    edo: 12,
    name: 'Raga Gangeshwari',
    steps: [4, 1, 2, 1, 2, 2],
    aliases: ['Kamal Manohari']
  },
  {
    edo: 12,
    name: 'Raga Kantal Varari',
    steps: [5, 2, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kashyapi',
    steps: [1, 2, 4, 1, 2, 2],
    aliases: ['Saheli Todi']
  },
  {
    edo: 12,
    name: 'Raga Khamas',
    steps: [4, 1, 2, 2, 1, 2],
    aliases: ['Desya Khamas', 'Bahudari']
  },
  {
    edo: 12,
    name: 'Raga Kohal',
    steps: [2, 1, 4, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kolhaas',
    steps: [2, 1, 4, 2, 1, 2],
    aliases: ['Manavi']
  },
  {
    edo: 12,
    name: 'Raga Kumudvati',
    steps: [2, 3, 1, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lagan Gandhar',
    steps: [2, 1, 1, 3, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lalita',
    steps: [1, 3, 1, 3, 3, 1],
    aliases: ['Sohini', 'Hamsanandi', 'Lalit Bhairav']
  },
  {
    edo: 12,
    name: 'Raga Latika',
    steps: [2, 2, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Madhukauns (hexatonic)',
    steps: [3, 3, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Madhuradhwani',
    steps: [4, 1, 4, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Madhuranjani',
    steps: [2, 1, 2, 2, 4, 1],
    aliases: ['Rangeshwari', 'Sindhura Kafi', 'Blues Harmonic Hexatonic']
  },
  {
    edo: 12,
    name: 'Raga Madhurkauns',
    steps: [3, 1, 1, 3, 2, 2],
    aliases: ['Mohankauns']
  },
  {
    edo: 12,
    name: 'Raga Malarani',
    steps: [2, 4, 1, 3, 1, 1],
    aliases: ['Hamsanada']
  },
  {
    edo: 12,
    name: 'Raga Malayamarutham',
    steps: [1, 3, 3, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Malin',
    steps: [1, 3, 3, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Mandari',
    steps: [1, 3, 2, 1, 4, 1],
    aliases: ['Gamakakriya', 'Hamsanarayani', 'Haunsnad', 'Koumari']
  },
  {
    edo: 12,
    name: 'Raga Mruganandana',
    steps: [2, 2, 2, 3, 2, 1],
    aliases: ['Raj Kalyan']
  },
  {
    edo: 12,
    name: 'Raga Nalinakanti',
    steps: [2, 2, 1, 2, 4, 1],
    aliases: ['Kedaram', 'Vilasini']
  },
  {
    edo: 12,
    name: 'Raga Navamanohari',
    steps: [2, 3, 2, 1, 2, 2],
    aliases: ['Shobhavari']
  },
  {
    edo: 12,
    name: 'Raga Neelangi',
    steps: [2, 1, 3, 2, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Nishadi',
    steps: [2, 4, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Padi',
    steps: [1, 4, 2, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Paraju (Paraz',
    steps: [4, 1, 2, 1, 3, 1],
    aliases: ['Pharas)', 'Ramamanohari', 'Sindhu Ramakriya', 'Kamalamanohari']
  },
  {
    edo: 12,
    name: 'Raga Parameshwari',
    steps: [1, 2, 2, 4, 1, 2],
    aliases: ['Deen Todi']
  },
  {
    edo: 12,
    name: 'Raga Phenadyuti',
    steps: [1, 4, 2, 1, 2, 2],
    aliases: ['Honchoshi', 'Insen', 'Niagari: Japan']
  },
  {
    edo: 12,
    name: 'Raga Rageshri (Rageshwari)',
    steps: [2, 2, 1, 4, 1, 2],
    aliases: ['Nattaikurinji (Natakuranji)']
  },
  {
    edo: 12,
    name: 'Raga Ranjani',
    steps: [2, 1, 3, 3, 2, 1],
    aliases: ['Rangini']
  },
  {
    edo: 12,
    name: 'Raga Ras Chandra',
    steps: [2, 2, 1, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rasamanjari',
    steps: [3, 1, 2, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rasavali',
    steps: [1, 4, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rudra Pancama',
    steps: [1, 3, 1, 4, 1, 2],
    aliases: ['Naat Kuranjika']
  },
  {
    edo: 12,
    name: 'Raga Saanjh Ki Hindol',
    steps: [4, 2, 3, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Salagavarali (Salag Varari)',
    steps: [1, 2, 4, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Sarasanana',
    steps: [2, 2, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kameshwari',
    steps: [2, 4, 1, 2, 1, 2],
    aliases: ['Sarasvati']
  },
  {
    edo: 12,
    name: 'Raga Saravati (Sharavati)',
    steps: [4, 1, 2, 1, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Shreevanti',
    steps: [1, 2, 3, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Simharava (Sinharavam)',
    steps: [2, 1, 3, 1, 3, 2],
    aliases: ['Gopikatilaka', 'Anil Madhyam']
  },
  {
    edo: 12,
    name: 'Raga Siva Kambhoji',
    steps: [2, 2, 1, 2, 3, 2],
    aliases: ['Vivardhini', 'Andhali']
  },
  {
    edo: 12,
    name: 'Raga Suddha Bangala',
    steps: [2, 1, 2, 2, 2, 3],
    aliases: ['Gauri Velavali', 'Pushp']
  },
  {
    edo: 12,
    name: 'Raga Suddha Mukhari',
    steps: [1, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Suddha Simantini',
    steps: [1, 2, 2, 2, 1, 4],
    aliases: ['Genus secundum inverse', 'Phrygian Hexamirror']
  },
  {
    edo: 12,
    name: 'Raga Syamalam',
    steps: [2, 1, 3, 1, 1, 4],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Takka',
    steps: [3, 2, 2, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Tilang',
    steps: [4, 1, 2, 3, 1, 1],
    aliases: ['Savitri', 'Brindabani Tilang', 'Hauns Shree']
  },
  {
    edo: 12,
    name: 'Raga Trimurti',
    steps: [2, 1, 4, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Tulsikauns',
    steps: [3, 2, 3, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Udasi Bhairav',
    steps: [1, 3, 1, 1, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Vasanta',
    steps: [1, 3, 1, 4, 2, 1],
    aliases: ['Chayavati']
  },
  {
    edo: 12,
    name: 'Raga Vasantabhairavi',
    steps: [1, 3, 1, 3, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Vijayanagari',
    steps: [2, 1, 3, 1, 2, 3],
    aliases: ['Shivawanti']
  },
  {
    edo: 12,
    name: 'Raga Vijayasri',
    steps: [1, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Vijayavasanta',
    steps: [4, 2, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Viyogavarali',
    steps: [1, 2, 2, 3, 3, 1],
    aliases: ['Antardhwani']
  },
  {
    edo: 12,
    name: 'Raga Vutari',
    steps: [4, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Yamuna Kalyani',
    steps: [2, 2, 2, 1, 2, 3],
    aliases: ['Kalyani Keseri', 'Airavati', 'Ancient Chinese']
  },
  {
    edo: 12,
    name: 'Messiaen mode 5',
    steps: [1, 1, 4, 1, 1, 4],
    aliases: ['Two-semitone Tritone scale']
  },
  {
    edo: 12,
    name: 'Messiaen mode 5 inverse',
    steps: [4, 1, 1, 4, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 3',
    steps: [1, 3, 1, 3, 1, 3],
    aliases: ['Hexatonic Set', 'Prometheus (Liszt)', 'Genus tertium inverse']
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 3 inverse',
    steps: [3, 1, 3, 1, 3, 1],
    aliases: ['Major Augmented', 'Genus tertium', 'Raga Devamani']
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 2',
    steps: [1, 2, 3, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen truncated mode 2',
    steps: [1, 3, 2, 1, 3, 2],
    aliases: ['Raga Indupriya', 'Tritone scale']
  },
  {
    edo: 12,
    name: 'Equal temperaments 3 and 4 mixed',
    steps: [3, 1, 2, 2, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Superlocrian Hexamirror',
    steps: [1, 2, 1, 2, 4, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Takemitsu Tree Line mode 1',
    steps: [2, 1, 3, 2, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Takemitsu Tree Line mode 2',
    steps: [2, 1, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Locrian', 
    steps: [1, 2, 2, 1, 2, 2, 2],
    aliases: ['M.Locrian', 'G.Mixolydian', 'G.Hyperdorian', 'M.Hypophrygian', 'G.M.Hyperaeolian', 'Rut biscale descending', 'Pien chih: China', 'Makam Lami', 'Raga Meladalan', 'Yishtabach: Jewish']
  },
  {
    edo: 12,
    name: 'Ionian (Major)', 
    steps: [2, 2, 1, 2, 2, 2, 1],
    aliases: ['G.Lydian', 'M.Hypolydian', 'Major', 'Bilaval That', 'Mela Shankarabharanam', 'Raga Atana', 'Begada', 'Kathanakuthuhalam', 'Ghana Heptatonic', 'Peruvian Major', 'Matzore', 'Rast ascending: Greece', '4th plagal Byzantine', 'Ararai: Ethiopia', 'Makam Cargah', 'Ajam Ashiran', 'Dastgah-e Mahur', 'Dastgah-e Rast Panjgah', 'Xin: China', 'DS2', 'Heptatonia prima']
  },
  {
    edo: 12,
    name: 'Dorian', 
    steps: [2, 1, 2, 2, 2, 1, 2],
    aliases: ['M.Dorian', 'G.Phrygian', 'M.Hypomixolydian', 'G.M.Hypoionian (Hypoiastian)', 'Kafi That', 'Mela Kharaharapriya', 'Raga Bageshri', 'Bhimpalasi', 'Dhanasri', 'Huseni', 'Kanara', 'Kannada Gowlai', 'Kapi', 'Nayaki Kanada', 'Raisa Kanada', 'Ritigaula', 'Shahana', 'Sriraga', 'Mischung 5', 'Gregorian nr.8', 'Eskimo Heptatonic', 'Yu: China', 'Hyojo', 'Oshikicho', 'Banshikicho: Japan', 'Nam: Vietnam']
  },
  {
    edo: 12,
    name: 'Phrygian', 
    steps: [1, 2, 2, 2, 1, 2, 2],
    aliases: ['M.Phrygian', 'G.Dorian', 'G.M.Hypoaeolian', 'Bhairavi That', 'Mela Hanumatodi', 'Raga Asavari (Asaveri)', 'Bilashkhani Todi', 'Darjeeling', 'Ghanta', 'Makam Kurd', 'Gregorian nr.3', 'Escala Andaluza', 'In', 'Zokuso: Japan', 'Ousak: Greece', 'Major inverse']
  },
  {
    edo: 12,
    name: 'Lydian', 
    steps: [2, 2, 2, 1, 2, 2, 1],
    aliases: ['M.Lydian', 'G.Hypolydian', 'G.M.Hypolocrian', 'Rut biscale ascending', 'Kalyan That (Yaman)', 'Mela Mecakalyani', 'Raga Chandrakant', 'Malarani', 'Shuddh Kalyan', 'Ping', 'Kung', 'Gu: China']
  },
  {
    edo: 12,
    name: 'Mixolydian', 
    steps: [2, 2, 1, 2, 2, 1, 2],
    aliases: ['M.Mixolydian', 'G.Hypophrygian', 'G.Ionian (Iastian)', 'G.M.Hypoionian', 'Hypermixolydian', 'Mischung 3', 'Khamaj That', 'Mela Harikambhoji', 'Raga Balahamsa', 'Bhim', 'Devamanohari', 'Gaoti', 'Harini', 'Janjhuti', 'Kaamaai', 'Kalashri', 'Khambhavati', 'Sahana', 'Sakh', 'Surati', 'Gregorian nr.7', 'Enharmonic Byzantine Liturgical', 'Rast descending: Greece', 'Ching', 'Shang: China']
  },
  {
    edo: 12,
    name: 'Aeolian (Natural Minor)', 
    steps: [2, 1, 2, 2, 1, 2, 2],
    aliases: ['G.M.Aeolian', 'G.M.Hypodorian', 'G.Hyperphrygian', 'Natural Minor', 'Melodic Minor descending', 'Asavari That', 'Mela Natabhairavi', 'Raga Jaunpuri', 'Adana', 'Darbari', 'Dhanyasi', 'Jingla', 'Sampurna Malkauns', 'Gregorian nr.2', 'Makam Buselik', 'Nihavend', 'Peruvian Minor', 'Se', 'Chiao: China', 'Geez', 'Ezel: Ethiopia', 'Kiourdi descending: Greece', 'Cushak: Armenia']
  },
  {
    edo: 12,
    name: 'Chromatic Mixolydian',
    steps: [1, 1, 3, 1, 1, 3, 2],
    aliases: ['Raga Madhusurja']
  },
  {
    edo: 12,
    name: 'Chromatic Lydian',
    steps: [1, 3, 1, 1, 3, 2, 1],
    aliases: ['Raga Lalit', 'Bhankar', 'Lalita Sohini', 'Malti Basant', 'Pancham', 'Sohini Pancham', 'Suddha Basant']
  },
  {
    edo: 12,
    name: 'Chromatic Phrygian',
    steps: [3, 1, 1, 3, 2, 1, 1],
    aliases: ['Raga Ek Prakar ki Kauns']
  },
  {
    edo: 12,
    name: 'Chromatic Dorian',
    steps: [1, 1, 3, 2, 1, 1, 3],
    aliases: ['Mela Kanakangi', 'Raga Kanakambari']
  },
  {
    edo: 12,
    name: 'Chromatic Hypolydian',
    steps: [1, 3, 2, 1, 1, 3, 1],
    aliases: ['Purvi (Poorvi) That', 'Mela Kamavardhani', 'Raga Shri', 'Basant', 'Gauri Basant', 'Dhipaka', 'Pantuvarali', 'Jaitashree', 'Kasiramakriya', 'Maligaura (Maligoura)', 'Puriya Dhanashri', 'Suddharamakriya', 'Tanki (Tankeshree)', 'Pireotikos: Greece']
  },
  {
    edo: 12,
    name: 'Chromatic Hypophrygian',
    steps: [3, 2, 1, 1, 3, 1, 1],
    aliases: ['Blues scale III']
  },
  {
    edo: 12,
    name: 'Chromatic Hypodorian',
    steps: [2, 1, 1, 3, 1, 1, 3],
    aliases: ['Relative Blues scale', 'Raga Dvigandharabushini']
  },
  {
    edo: 12,
    name: 'Chromatic Mixolydian inverse',
    steps: [2, 3, 1, 1, 3, 1, 1],
    aliases: ['Raga Loom Sarang']
  },
  {
    edo: 12,
    name: 'Chromatic Phrygian inverse',
    steps: [1, 1, 2, 3, 1, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Chromatic Hypophrygian inverse',
    steps: [1, 1, 3, 1, 1, 2, 3],
    aliases: ['Phrygian Hungarian Minor']
  },
  {
    edo: 12,
    name: 'Chromatic Hypodorian inverse',
    steps: [3, 1, 1, 3, 1, 1, 2],
    aliases: ['Raga Amrut Ranjani']
  },
  {
    edo: 12,
    name: 'Melodic Minor ascending',
    steps: [2, 1, 2, 2, 2, 2, 1],
    aliases: ['Jazz Minor', 'Minor-Major', 'Dorian sharp 7', 'Mela Gaurimanohari', 'Raga Kedar Bahar', 'Patdip (Patadeep)', 'Velavali', 'Deshi(2)', 'Mischung 1', 'Hawaiian']
  },
  {
    edo: 12,
    name: 'Harmonic Minor',
    steps: [2, 1, 2, 2, 1, 3, 1],
    aliases: ['Mischung 4', 'Pilu That', 'Mela Kiravani', 'Raga Kiranavali', 'Kirvani (Kirwani)', 'Kalyana Vasantha', 'Deshi(3)', 'Maqam Bayat-e-Esfahan', 'Sultani Yakah', 'Zhalibny Minor', 'Armoniko minore: Greece']
  },
  {
    edo: 12,
    name: 'Harmonic Minor inverse',
    steps: [1, 3, 1, 2, 2, 1, 2],
    aliases: ['Mixolydian flat 2', 'Mela Cakravaka', 'Raga Ahir Bhairav', 'Bindumalini', 'Hevitri', 'Vegavahini', 'Makam Hicaz', 'Zanjaran']
  },
  {
    edo: 12,
    name: 'Harmonic Major',
    steps: [2, 2, 1, 2, 1, 3, 1],
    aliases: ['Mischung 2', 'Mela Sarasangi', 'Raga Anand Leela', 'Haripriya', 'Nat Bhairav', 'Simhavahini', 'Ethiopian', 'Tabahaniotikos: Greece']
  },
  {
    edo: 12,
    name: 'Makam Huzzam',
    steps: [1, 2, 1, 3, 1, 2, 2],
    aliases: ['Maqam Saba Zamzam', 'Phrygian flat 4']
  },
  {
    edo: 12,
    name: 'Ionian Augmented',
    steps: [2, 2, 1, 3, 1, 2, 1],
    aliases: ['Ionian sharp 5']
  },
  {
    edo: 12,
    name: 'Lydian Augmented',
    steps: [2, 2, 2, 2, 1, 2, 1],
    aliases: ['Lydian sharp 5']
  },
  {
    edo: 12,
    name: 'Locrian natural 6',
    steps: [1, 2, 2, 1, 3, 1, 2],
    aliases: ['Maqam Tarznauyn', 'Raga Laliteshwari']
  },
  {
    edo: 12,
    name: 'Major Locrian',
    steps: [2, 2, 1, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Minor Locrian',
    steps: [2, 1, 2, 1, 2, 2, 2],
    aliases: ['Semilocrian', 'Half Diminished', 'Locrian sharp 2', 'Minor flat 5']
  },
  {
    edo: 12,
    name: 'Superlocrian',
    steps: [1, 2, 1, 2, 2, 2, 2],
    aliases: ['Altered Dominant', 'Diminished Whole-tone', 'Locrian flat 4', 'Pomeroy', 'Ravel', 'Raga Faridi Todi']
  },
  {
    edo: 12,
    name: 'Locrian nr.2',
    steps: [2, 1, 2, 1, 2, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Ultralocrian',
    steps: [1, 2, 1, 2, 2, 1, 3],
    aliases: ['Superlocrian Diminished', 'Mixolydian sharp 1', 'Altered Diminished 7']
  },
  {
    edo: 12,
    name: 'Locrian double-flat 7',
    steps: [1, 2, 2, 1, 2, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Nohkan Flute scale: Japan',
    steps: [2, 3, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Sabach (Sambah) ascending: Greece',
    steps: [2, 1, 1, 3, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Dorian flat 5',
    steps: [2, 1, 2, 1, 3, 1, 2],
    aliases: ['Blues Heptatonic', 'Makam Karcigar', 'Maqam Nahawand Murassah', 'Kiourdi ascending', 'Kartzihiar: Greece']
  },
  {
    edo: 12,
    name: 'Blues Heptatonic II',
    steps: [3, 2, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Blues Harmonic Heptatonic',
    steps: [3, 2, 1, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Jeths\' mode',
    steps: [2, 1, 2, 1, 3, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Triadic Heptatonic 29',
    steps: [1, 1, 2, 2, 1, 2, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Ratnangi',
    steps: [1, 1, 3, 2, 1, 2, 2],
    aliases: ['Raga Phenadyuti']
  },
  {
    edo: 12,
    name: 'Mela Ganamurti',
    steps: [1, 1, 3, 2, 1, 3, 1],
    aliases: ['Raga Ganasamavarali']
  },
  {
    edo: 12,
    name: 'Mela Vanaspati',
    steps: [1, 1, 3, 2, 2, 1, 2],
    aliases: ['Raga Bhanumati']
  },
  {
    edo: 12,
    name: 'Mela Manavati',
    steps: [1, 1, 3, 2, 2, 2, 1],
    aliases: ['Raga Manoranjani']
  },
  {
    edo: 12,
    name: 'Mela Tanarupi',
    steps: [1, 1, 3, 2, 3, 1, 1],
    aliases: ['Raga Tanukirti']
  },
  {
    edo: 12,
    name: 'Mela Senavati',
    steps: [1, 2, 2, 2, 1, 1, 3],
    aliases: ['Raga Senagrani', 'Malini']
  },
  {
    edo: 12,
    name: 'Neapolitan Minor',
    steps: [1, 2, 2, 2, 1, 3, 1],
    aliases: ['Hungarian Gipsy', 'Mela Dhenuka', 'Raga Bhinnasadjam', 'Dhunibinnashadjam', 'Kirvanti', 'Takka', 'Maqam Shahnaz Kurdi']
  },
  {
    edo: 12,
    name: 'Neapolitan Major',
    steps: [1, 2, 2, 2, 2, 2, 1],
    aliases: ['Lydian Major', 'Mela Kokilapriya', 'Raga Kokilaravam', 'Heptatonia tertia']
  },
  {
    edo: 12,
    name: 'Mela Natakapriya',
    steps: [1, 2, 2, 2, 2, 1, 2],
    aliases: ['Jazz Minor inverse', 'Phrygian-Mixolydian', 'Dorian flat 2', 'Phrygian sharp 6', 'Raga Ahiri Todi', 'Jaiwanti Todi', 'Natabharanam', 'Motaki', 'Prabhateshwari']
  },
  {
    edo: 12,
    name: 'Mela Rupavati',
    steps: [1, 2, 2, 2, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lalita',
    steps: [1, 3, 1, 1, 2, 3, 1],
    aliases: ['Persian', 'Chromatic Hypolydian inverse', 'Raga Suddha Pancama']
  },
  {
    edo: 12,
    name: 'Mela Gayakapriya',
    steps: [1, 3, 1, 2, 1, 1, 3],
    aliases: ['Raga Kalakanti', 'Gipsy Hexatonic']
  },
  {
    edo: 12,
    name: 'Phrygian Dominant',
    steps: [1, 3, 1, 2, 1, 2, 2],
    aliases: ['Phrygian Major', 'Mela Vakulabharanam', 'Raga Ahiri', 'Basant Mukhari', 'Jogiya', 'Prabhakali', 'Vativasantabhairavi', 'Zilof', 'Ahava rabbah', 'Freygish: Jewish', 'Maqam Hijaz-Nahawand', 'Humayun', 'Spanish Gipsy', 'Dorico Flamenco', 'Frigio Flamenco: Spain', 'Hitzaz: Greece', 'Harmonic Major inverse', 'Mixolydian flat 2 flat 6']
  },
  {
    edo: 12,
    name: 'Double Harmonic Major',
    steps: [1, 3, 1, 2, 1, 3, 1],
    aliases: ['Major Gipsy', 'Bhairav That', 'Mela Mayamalavagaula', 'Raga Paraj', 'Kalingada (Kalingda)', 'Gaulipantu', 'Lalitapancamam', 'Gandhakriya', 'Manjiri', 'Chromatic 2nd Byzantine Liturgical', 'Hitzazkiar: Greece', 'Maqam Zengule', 'Hijaz Kar', 'Suzidil']
  },
  {
    edo: 12,
    name: 'Mela Suryakanta',
    steps: [1, 3, 1, 2, 2, 2, 1],
    aliases: ['Bhairubahar That', 'Raga Supradhipam', 'Sowrashtram (Sourashtra)', 'Jaganmohini', 'Bhatiyari Bhairav', 'Dakshinatya Basant', 'Major-Melodic Phrygian', 'Hungarian Gipsy inverse']
  },
  {
    edo: 12,
    name: 'Mela Hatakambari',
    steps: [1, 3, 1, 2, 3, 1, 1],
    aliases: ['Raga Jeyasuddhamalavi']
  },
  {
    edo: 12,
    name: 'Modified Blues',
    steps: [2, 1, 2, 1, 1, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Jhankaradhvani',
    steps: [2, 1, 2, 2, 1, 1, 3],
    aliases: ['Raga Jhankara Bhramavi']
  },
  {
    edo: 12,
    name: 'Mela Varunapriya',
    steps: [2, 1, 2, 2, 3, 1, 1],
    aliases: ['Viravasantham', 'Raga Daulati', 'Dev Sakh (Deshakya)', 'Nanak Malhar']
  },
  {
    edo: 12,
    name: 'Mela Mararanjani',
    steps: [2, 2, 1, 2, 1, 1, 3],
    aliases: ['Raga Keseri', 'Major Bebop Heptatonic']
  },
  {
    edo: 12,
    name: 'Major-Minor',
    steps: [2, 2, 1, 2, 1, 2, 2],
    aliases: ['Melodic Major', 'Mischung 6', 'Mixolydian flat 6', 'Arabic Minor', 'Oriental Minor', 'Mela Carukesi', 'Raga Charukeshi', 'Malayalam', 'Tarangini', 'Heptatonia secunda']
  },
  {
    edo: 12,
    name: 'Mela Naganandini',
    steps: [2, 2, 1, 2, 3, 1, 1],
    aliases: ['Raga Badhans Sarang', 'Nagabharanam', 'Nupur', 'Samanta']
  },
  {
    edo: 12,
    name: 'Mela Yagapriya',
    steps: [3, 1, 1, 2, 1, 1, 3],
    aliases: ['Raga Kalahamsa']
  },
  {
    edo: 12,
    name: 'Mela Ragavardhani',
    steps: [3, 1, 1, 2, 1, 2, 2],
    aliases: ['Raga Cudamani', 'Vardhini']
  },
  {
    edo: 12,
    name: 'Mela Gangeyabhusani',
    steps: [3, 1, 1, 2, 1, 3, 1],
    aliases: ['Raga Gangatarangini', 'Sengiach (Sengah): Greece', 'Gipsy Hexatonic inverse']
  },
  {
    edo: 12,
    name: 'Mela Vagadhisvari',
    steps: [3, 1, 1, 2, 2, 1, 2],
    aliases: ['Raga Bhogachayanata', 'Chayanata', 'Ganavaridhi', 'Jogeshwari Pancham', 'Nandkauns', 'Bluesy Rock \'n Roll']
  },
  {
    edo: 12,
    name: 'Mela Sulini',
    steps: [3, 1, 1, 2, 2, 2, 1],
    aliases: ['Raga Sailadesakshi', 'Raga Trishuli', 'Houzam: Greece']
  },
  {
    edo: 12,
    name: 'Mela Calanata',
    steps: [3, 1, 1, 2, 3, 1, 1],
    aliases: ['Raga Dogaha', 'None', 'Chromatic Dorian inverse']
  },
  {
    edo: 12,
    name: 'Mela Salaga',
    steps: [1, 1, 4, 1, 1, 1, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Jalarnava',
    steps: [1, 1, 4, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Jhalavarali',
    steps: [1, 1, 4, 1, 1, 3, 1],
    aliases: ['Raga Varali', 'Jinavali']
  },
  {
    edo: 12,
    name: 'Mela Navanitam',
    steps: [1, 1, 4, 1, 2, 1, 2],
    aliases: ['Raga Nabhomani']
  },
  {
    edo: 12,
    name: 'Mela Pavani',
    steps: [1, 1, 4, 1, 2, 2, 1],
    aliases: ['Raga Kumbhini']
  },
  {
    edo: 12,
    name: 'Mela Raghupriya',
    steps: [1, 1, 4, 1, 3, 1, 1],
    aliases: ['Raga Ravikriya', 'Ghandarva']
  },
  {
    edo: 12,
    name: 'Mela Gavambodhi',
    steps: [1, 2, 3, 1, 1, 1, 3],
    aliases: ['Raga Girvani']
  },
  {
    edo: 12,
    name: 'Mela Bhavapriya',
    steps: [1, 2, 3, 1, 1, 2, 2],
    aliases: ['Raga Bhavani', 'Kalamurti', 'Neveseri ascending: Greece']
  },
  {
    edo: 12,
    name: 'Todi That',
    steps: [1, 2, 3, 1, 1, 3, 1],
    aliases: ['Mela Shubhapantuvarali', 'Raga Annapurna', 'Gamakasamantam', 'Hemavanti', 'Kaam Ranjani', 'Multani', 'Harsh Minor', 'Chromatic Lydian inverse', 'Maqam Athar Kurd']
  },
  {
    edo: 12,
    name: 'Mela Sadvidhamargini',
    steps: [1, 2, 3, 1, 2, 1, 2],
    aliases: ['Raga Sthavarajam', 'Tivravahini']
  },
  {
    edo: 12,
    name: 'Mela Suvarnangi',
    steps: [1, 2, 3, 1, 2, 2, 1],
    aliases: ['Raga Sauviram']
  },
  {
    edo: 12,
    name: 'Mela Divyamani',
    steps: [1, 2, 3, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Dhavalambari',
    steps: [1, 3, 2, 1, 1, 1, 3],
    aliases: ['Raga Dhavalangam', 'Foulds\' Mantra of Will scale']
  },
  {
    edo: 12,
    name: 'Mela Namanarayani',
    steps: [1, 3, 2, 1, 1, 2, 2],
    aliases: ['Raga Narmada', 'Pratapa', 'Harsh Major-Minor', 'Mixolydian flat 2 sharp 4 flat 6']
  },
  {
    edo: 12,
    name: 'Romanian Major',
    steps: [1, 3, 2, 1, 2, 1, 2],
    aliases: ['Mela Ramapriya', 'Raga Basant Bahar', 'Ramamanohari', 'Rampriya', 'Petrushka chord', 'Mixolydian flat 2 sharp 4']
  },
  {
    edo: 12,
    name: 'Marva That',
    steps: [1, 3, 2, 1, 2, 2, 1],
    aliases: ['Mela Gamanasrama', 'Raga Bairari (Baradi)', 'Malavi', 'Partiravam', 'Puriya', 'Puriya Kalyan', 'Purva', 'Purvikalyani', 'Sohani', 'Harsh-intense Major', 'Peiraiotikos: Greece']
  },
  {
    edo: 12,
    name: 'Mela Visvambhari',
    steps: [1, 3, 2, 1, 3, 1, 1],
    aliases: ['Raga Vamsavathi']
  },
  {
    edo: 12,
    name: 'Verdi\'s Scala enigmatica ascending',
    steps: [1, 3, 2, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Verdi\'s Scala enigmatica descending',
    steps: [1, 3, 1, 3, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Moravian Pistalkova',
    steps: [2, 1, 2, 1, 2, 1, 3],
    aliases: ['Hungarian Major inverse']
  },
  {
    edo: 12,
    name: 'Minor Gipsy',
    steps: [2, 1, 3, 1, 1, 2, 2],
    aliases: ['Mela Sanmukhapriya', 'Raga Camara', 'Chinthamani']
  },
  {
    edo: 12,
    name: 'Double Harmonic Minor',
    steps: [2, 1, 3, 1, 1, 3, 1],
    aliases: ['Hungarian Minor', 'Egyptian Heptatonic', 'Mela Simhendramadhyama', 'Raga Madhava Manohari', 'Shimendra Madyam', 'Maqam Nawa Athar', 'Hisar', 'Flamenco Mode', 'Niavent: Greece']
  },
  {
    edo: 12,
    name: 'Mela Hemavati',
    steps: [2, 1, 3, 1, 2, 1, 2],
    aliases: ['Raga Desisimharavam', 'Madhukant', 'Maqam Nakriz', 'Tunisian', 'Dorian sharp 4', 'Misheberekh: Jewish', 'Nigriz', 'Pimenikos', 'Souzinak (Peiraiotikos Minor): Greece', 'Ukrainian Dorian', 'Ukrainian Minor', 'Kaffa', 'Gnossiennes']
  },
  {
    edo: 12,
    name: 'Lydian Diminished',
    steps: [2, 1, 3, 1, 2, 2, 1],
    aliases: ['Mela Dharmavati', 'Raga Ambika', 'Anjani Kalyan', 'Arunajualita', 'Dumyaraga', 'Madhuvanti']
  },
  {
    edo: 12,
    name: 'Minor Gipsy inverse',
    steps: [2, 2, 1, 1, 3, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Lydian Minor',
    steps: [2, 2, 2, 1, 1, 2, 2],
    aliases: ['Mela Rishabhapriya', 'Raga Ratipriya', 'Mixolydian sharp 4 flat 6']
  },
  {
    edo: 12,
    name: 'Harmonic Lydian',
    steps: [2, 2, 2, 1, 1, 3, 1],
    aliases: ['Mela Latangi', 'Raga Gitapriya', 'Hamsalata']
  },
  {
    edo: 12,
    name: 'Lydian Dominant',
    steps: [2, 2, 2, 1, 2, 1, 2],
    aliases: ['Mela Vacaspati', 'Raga Bhusavati', 'Bhusavali', 'Vachaspati', 'Overtone', 'Lydian-Mixolydian', 'Bartok']
  },
  {
    edo: 12,
    name: 'Hungarian Major',
    steps: [3, 1, 2, 1, 2, 1, 2],
    aliases: ['Mela Nasikabhusani', 'Raga Nasamani']
  },
  {
    edo: 12,
    name: 'Aeolian Harmonic',
    steps: [3, 1, 2, 1, 2, 2, 1],
    aliases: ['Lydian sharp 2', 'Mela Kosalam', 'Raga Kusumakaram', 'Sampoorna Hindol']
  },
  {
    edo: 12,
    name: 'Aeolian flat 1',
    steps: [3, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Mela Citrambari',
    steps: [2, 2, 2, 1, 3, 1, 1],
    aliases: ['Raga Chaturangini']
  },
  {
    edo: 12,
    name: 'Mela Dhatuvardhani',
    steps: [3, 1, 2, 1, 1, 3, 1],
    aliases: ['Raga Dhauta Pancama', 'Devarashtra']
  },
  {
    edo: 12,
    name: 'Mela Jyotisvarupini',
    steps: [3, 1, 2, 1, 1, 2, 2],
    aliases: ['Raga Jotismatti']
  },
  {
    edo: 12,
    name: 'Mela Kantamani',
    steps: [2, 2, 2, 1, 1, 1, 3],
    aliases: ['Raga Kuntala', 'Srutiranjani']
  },
  {
    edo: 12,
    name: 'Mela Nitimati',
    steps: [2, 1, 3, 1, 3, 1, 1],
    aliases: ['Raga Nisada', 'Kaikavasi']
  },
  {
    edo: 12,
    name: 'Mela Rasikapriya',
    steps: [3, 1, 2, 1, 3, 1, 1],
    aliases: ['Raga Rasamanjari', 'Hamsagiri']
  },
  {
    edo: 12,
    name: 'Mela Sucaritra',
    steps: [3, 1, 2, 1, 1, 1, 3],
    aliases: ['Raga Santanamanjari']
  },
  {
    edo: 12,
    name: 'Mela Syamalangi',
    steps: [2, 1, 3, 1, 1, 1, 3],
    aliases: ['Raga Shyamalam', 'Vijay']
  },
  {
    edo: 12,
    name: 'Raga Chandni Kedar',
    steps: [2, 3, 1, 1, 2, 2, 1],
    aliases: ['Jairaj', 'Noor Sarang', 'Suddha Sarang']
  },
  {
    edo: 12,
    name: 'Raga Hindol Bahar',
    steps: [4, 1, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Homshikha',
    steps: [3, 1, 3, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Madhuri',
    steps: [4, 1, 2, 2, 1, 1, 1],
    aliases: ['Kaamkesh', 'Kamal Ranjani', 'Khokar']
  },
  {
    edo: 12,
    name: 'Raga Milan Gandhar',
    steps: [2, 1, 1, 3, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Pushp Ranjani',
    steps: [1, 3, 1, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rageshri',
    steps: [2, 2, 1, 4, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Ravikosh',
    steps: [2, 1, 1, 1, 4, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Sorati',
    steps: [2, 3, 2, 2, 1, 1, 1],
    aliases: ['Badhans Sarang', 'Miyan Ki Sarang', 'Samant Sarang', 'Sawani Kedar', 'Sur Malhar (Surdasi Malhar)']
  },
  {
    edo: 12,
    name: 'Oriental',
    steps: [1, 3, 1, 1, 3, 1, 2],
    aliases: ['Raga Ahira-Lalita (Ahir Lalit)', 'Hungarian Minor inverse', 'Tsinganikos: Greece']
  },
  {
    edo: 12,
    name: 'Appalachian',
    steps: [1, 1, 1, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Leading Whole-tone',
    steps: [2, 2, 2, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Leading Whole-tone inverse',
    steps: [1, 1, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Debussy\'s Heptatonic',
    steps: [2, 1, 1, 1, 1, 3, 3],
    aliases: []
  },
  {
    edo: 12,
    name: 'Conway\'s Heptatonic',
    steps: [2, 1, 2, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Araj',
    steps: [1, 3, 1, 2, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Asa Bhairav',
    steps: [1, 1, 2, 1, 2, 2, 2, 1],
    aliases: ['Adi Basant']
  },
  {
    edo: 12,
    name: 'Raga Basant Pancham',
    steps: [1, 3, 1, 1, 1, 1, 3, 1],
    aliases: ['Lalita Gauri', 'Prabhaat Bhairav', 'Ramkali (Ramakri)']
  },
  {
    edo: 12,
    name: 'Raga Bhankar',
    steps: [1, 3, 1, 1, 1, 2, 2, 1],
    aliases: ['Bhatiyar', 'Jaikauns', 'Lalit Pancham', 'Manomanjari', 'Vihang']
  },
  {
    edo: 12,
    name: 'Raga Chandni Bihag',
    steps: [4, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Cintamani',
    steps: [2, 1, 3, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Dhavalshree',
    steps: [1, 3, 2, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Gandhari',
    steps: [1, 1, 1, 2, 2, 1, 2, 2],
    aliases: ['Bahaduri Todi', 'Komal Desi', 'Phrygian/Aeolian mixed']
  },
  {
    edo: 12,
    name: 'Raga Gunji Kanada',
    steps: [2, 1, 1, 1, 2, 1, 2, 2],
    aliases: ['Dev Gandhar']
  },
  {
    edo: 12,
    name: 'Raga Hafiz Kauns',
    steps: [3, 1, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Haunskinkini',
    steps: [2, 1, 1, 1, 2, 2, 2, 1],
    aliases: ['Patdipaki', 'Sawan']
  },
  {
    edo: 12,
    name: 'Raga Hijaj Bhairav',
    steps: [1, 1, 2, 1, 2, 1, 2, 2],
    aliases: ['Jogi Asavari']
  },
  {
    edo: 12,
    name: 'Raga Jogkauns',
    steps: [3, 1, 1, 2, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lachari Kanada',
    steps: [2, 1, 1, 1, 2, 3, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lalitavari',
    steps: [1, 1, 2, 1, 1, 3, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Mian Ki Malhar',
    steps: [2, 1, 2, 2, 2, 1, 1, 1],
    aliases: ['Charju Ki Malhar', 'Bahar', 'Bageshri Bahar', 'Barwa', 'Hussaini Todi', 'Lankadahan Sarang', 'Sindhura', 'Sughrai']
  },
  {
    edo: 12,
    name: 'Raga Monomanjari',
    steps: [1, 3, 2, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Mukhari',
    steps: [2, 1, 2, 2, 1, 1, 1, 2],
    aliases: ['Anandabhairavi', 'Deshi (Desi)', 'Kaushik Bahar', 'Khat', 'Manji', 'Gregorian nr.1', 'Dorian/Aeolian mixed']
  },
  {
    edo: 12,
    name: 'Raga Nandavati',
    steps: [2, 2, 1, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Saurashtra',
    steps: [1, 3, 1, 2, 1, 1, 2, 1],
    aliases: ['Saurashtra Bhairav']
  },
  {
    edo: 12,
    name: 'Raga Shankara Karan',
    steps: [2, 2, 2, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Shyam Kedar',
    steps: [2, 3, 1, 1, 2, 1, 1, 1],
    aliases: ['Saraswati Sarang', 'Ambika Sarang']
  },
  {
    edo: 12,
    name: 'Raga Suha Todi',
    steps: [1, 2, 2, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Tanseni Madhuvanti',
    steps: [2, 1, 3, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Viranch Mukhi',
    steps: [2, 1, 1, 1, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Virat Bhairav',
    steps: [1, 3, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Sabach (Sambah): Greece',
    steps: [2, 1, 1, 3, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Minor Bebop',
    steps: [2, 1, 1, 1, 2, 2, 1, 2],
    aliases: ['Dorian Bebop', 'Raga Bheem', 'Khokhar', 'Lankeshwari', 'Malgunji', 'Neelambari', 'Zilla', 'Mixolydian/Dorian mixed', 'Basque']
  },
  {
    edo: 12,
    name: 'Genus diatonicum',
    steps: [2, 2, 1, 2, 2, 1, 1, 1],
    aliases: ['Dominant Bebop', 'Raga Khamaj', 'Alhaiya Bilaval', 'Bihagara', 'Champak', 'Desh Malhar (Des)', 'Devagandhari', 'Dipak', 'Gaud Malhar', 'Jaijaiwante', 'Kukubh Bilawal', 'Lankeshree', 'Malagunji', 'Nat Bihag', 'Nat Malhar', 'Sorath', 'Tilak Malhar', 'Maqam Shawq Awir', 'Gregorian nr.6', 'Chinese Eight-Tone', 'Rast: Greece', 'Ionian/Mixolydian mixed']
  },
  {
    edo: 12,
    name: 'Major Bebop',
    steps: [2, 2, 1, 2, 1, 1, 2, 1],
    aliases: ['Altered Mixolydian']
  },
  {
    edo: 12,
    name: 'Blues scale II',
    steps: [2, 1, 2, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Algerian',
    steps: [2, 1, 2, 1, 1, 1, 3, 1],
    aliases: ['Sabiren', 'Blues Dark Double Harmonic']
  },
  {
    edo: 12,
    name: 'Spanish Phrygian',
    steps: [1, 2, 1, 1, 2, 1, 2, 2],
    aliases: ['Polish']
  },
  {
    edo: 12,
    name: 'Fokker Six-star A',
    steps: [1, 2, 1, 1, 2, 1, 3, 1],
    aliases: ['Raga Devata Bhairav']
  },
  {
    edo: 12,
    name: 'Espla\'s scale',
    steps: [1, 2, 1, 1, 1, 2, 2, 2],
    aliases: ['Eight-tone Spanish']
  },
  {
    edo: 12,
    name: 'Half-diminished Bebop',
    steps: [1, 2, 2, 1, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Locrian Bebop',
    steps: [1, 2, 1, 2, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Neapolitan Major and Minor mixed',
    steps: [1, 2, 2, 2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Neveseri: Greece',
    steps: [1, 2, 3, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Sideways scale',
    steps: [1, 2, 3, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Diminished',
    steps: [2, 1, 2, 1, 2, 1, 2, 1],
    aliases: ['Modus conjunctus', 'Messiaen mode 2 inverse', 'Whole-Half step scale']
  },
  {
    edo: 12,
    name: 'Ishikotsucho: Japan',
    steps: [2, 2, 1, 1, 1, 2, 2, 1],
    aliases: ['Raga Yaman Kalyan', 'Chayanat', 'Bihag', 'Hamir Kalyani', 'Kedar', 'Khem Kalyan', 'Gaud Sarang', 'Maru Bihag', 'Pat Bihag', 'Sanjh Saravali', 'Genus diatonicum veterum correctum', 'Gregorian nr.5', 'Kubilai\'s Mongol scale', 'Ionian/Lydian mixed']
  },
  {
    edo: 12,
    name: 'Verdi\'s Scala enigmatica',
    steps: [1, 3, 1, 1, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Zirafkend: Arabic',
    steps: [2, 1, 2, 2, 1, 1, 2, 1],
    aliases: ['Melodic Minor Bebop']
  },
  {
    edo: 12,
    name: 'Adonai Malakh: Jewish',
    steps: [1, 1, 1, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Magen Abot: Jewish',
    steps: [1, 2, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Maqam Nahawand',
    steps: [2, 1, 2, 2, 1, 2, 1, 1],
    aliases: ['Farahfaza', 'Raga Suha (Suha Kanada)', 'Gregorian nr.4', 'Utility Minor']
  },
  {
    edo: 12,
    name: 'Harmonic and Neapolitan Minor mixed',
    steps: [1, 1, 1, 2, 2, 1, 3, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Maqam Hijaz (Hedjaz)',
    steps: [1, 3, 1, 2, 1, 2, 1, 1],
    aliases: ['Raga Kabir Bhairav', 'Blues Bright Double Harmonic']
  },
  {
    edo: 12,
    name: 'Maqam Shadd\'araban',
    steps: [1, 2, 1, 1, 1, 3, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Octatonic',
    steps: [1, 2, 1, 2, 1, 2, 1, 2],
    aliases: ['Messiaen mode 2', 'Dominant Diminished', 'Diminished Blues', 'Half-Whole step scale']
  },
  {
    edo: 12,
    name: 'Messiaen mode 4',
    steps: [1, 1, 1, 3, 1, 1, 1, 3],
    aliases: ['Tcherepnin Octatonic mode 3']
  },
  {
    edo: 12,
    name: 'Messiaen mode 4 inverse',
    steps: [3, 1, 1, 1, 3, 1, 1, 1],
    aliases: ['Tcherepnin Octatonic mode 4']
  },
  {
    edo: 12,
    name: 'Messiaen mode 6',
    steps: [1, 1, 2, 2, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen mode 6 inverse',
    steps: [2, 2, 1, 1, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Tcherepnin Octatonic mode 1',
    steps: [1, 3, 1, 1, 1, 3, 1, 1],
    aliases: ['Duplex genus primum inverse']
  },
  {
    edo: 12,
    name: 'Tcherepnin Octatonic mode 2',
    steps: [1, 1, 3, 1, 1, 1, 3, 1],
    aliases: ['Duplex genus primum']
  },
  {
    edo: 12,
    name: 'Phrygian/Locrian mixed',
    steps: [1, 2, 2, 1, 1, 1, 2, 2],
    aliases: ['Raga Bhairavi']
  },
  {
    edo: 12,
    name: 'Hamel',
    steps: [1, 2, 2, 2, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Van der Horst Octatonic',
    steps: [1, 2, 2, 1, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Prokofiev',
    steps: [1, 2, 2, 1, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Shostakovich',
    steps: [1, 2, 1, 2, 1, 2, 2, 1],
    aliases: ['Raga Marg Hindol']
  },
  {
    edo: 12,
    name: 'JG Octatonic',
    steps: [1, 2, 1, 1, 2, 2, 1, 2],
    aliases: ['Latin-American']
  },
  {
    edo: 12,
    name: 'Jobim\'s Scale',
    steps: [2, 1, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Equal temperaments 4 and 6 mixed',
    steps: [2, 1, 1, 2, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen mode 3',
    steps: [1, 1, 2, 1, 1, 2, 1, 1, 2],
    aliases: ['Tcherepnin Nonatonic mode 3']
  },
  {
    edo: 12,
    name: 'Messiaen mode 3 inverse',
    steps: [2, 1, 1, 2, 1, 1, 2, 1, 1],
    aliases: ['Tcherepnin Nonatonic mode 2']
  },
  {
    edo: 12,
    name: 'Blues Enneatonic',
    steps: [2, 1, 1, 1, 2, 2, 1, 1, 1],
    aliases: ['Raga Gara', 'Jaijaiwanti', 'Jayant Malhar', 'Hanskinkini', 'Malgunji', 'Nagadhwani Kanada', 'Nilambari', 'Pat Manjiri', 'Rageshri Bahar', 'Ramdasi Malhar', 'Tilang Bahar', 'Zila Kafi', 'Ionian/Dorian mixed']
  },
  {
    edo: 12,
    name: 'Blues Enneatonic II',
    steps: [2, 1, 1, 1, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Full Minor',
    steps: [2, 1, 2, 2, 1, 1, 1, 1, 1],
    aliases: ['Raga Jungala', 'Kanada Bahar', 'Meera Malhar', 'Pilu']
  },
  {
    edo: 12,
    name: 'Raga Abheri Todi',
    steps: [1, 1, 1, 1, 1, 2, 1, 2, 2],
    aliases: ['Devgandhari Todi']
  },
  {
    edo: 12,
    name: 'Raga Ahi Mohini',
    steps: [1, 2, 1, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Basanti Kanada',
    steps: [1, 3, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Bihad Bhairav',
    steps: [1, 2, 1, 1, 2, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Chandranandan',
    steps: [2, 1, 1, 1, 2, 1, 2, 1, 1],
    aliases: ['Enayetkhani Kanada']
  },
  {
    edo: 12,
    name: 'Raga Kabiri Bhairav',
    steps: [1, 3, 1, 2, 1, 1, 1, 1, 1],
    aliases: ['Rati Bhairav']
  },
  {
    edo: 12,
    name: 'Raga Kamod',
    steps: [1, 1, 2, 1, 1, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Khat Todi',
    steps: [1, 2, 2, 1, 1, 1, 2, 1, 1],
    aliases: ['Mangal Todi', 'Adaranga Todi']
  },
  {
    edo: 12,
    name: 'Raga Lalit Mangal',
    steps: [1, 3, 1, 1, 1, 1, 1, 2, 1],
    aliases: ['Purba', 'Saajgiri (Sazgiri)', 'Sonakshi', 'Sourashtra Bhairav']
  },
  {
    edo: 12,
    name: 'Raga Lalitkali',
    steps: [1, 3, 1, 1, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Maru',
    steps: [1, 1, 2, 1, 1, 1, 1, 3, 1],
    aliases: ['Roopkali']
  },
  {
    edo: 12,
    name: 'Raga Nat Kedar',
    steps: [2, 2, 1, 1, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Niranjani Todi',
    steps: [1, 2, 2, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Pahadi',
    steps: [2, 2, 1, 2, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Rang Malhar',
    steps: [2, 1, 2, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Kiourdi: Greece',
    steps: [2, 1, 2, 1, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Taishikicho',
    steps: [2, 2, 1, 1, 1, 2, 1, 1, 1],
    aliases: ['Ryo: Japan', 'Raga Chayanat', 'Kedar', 'Kukubh Bilawal', 'Maluha Kedar', 'Manj Khamaj', 'Medhavi', 'Nat Bilawal', 'Pancham se Gara', 'Pancham se Pilu', 'Saraswati Kedar', 'Suddha Chaya', 'Lydian/Mixolydian mixed']
  },
  {
    edo: 12,
    name: 'Chromatic Bebop',
    steps: [1, 1, 2, 1, 2, 2, 1, 1, 1],
    aliases: ['Raga Bhairav Bahar']
  },
  {
    edo: 12,
    name: 'Locrian/Aeolian mixed',
    steps: [1, 1, 1, 2, 1, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Genus chromaticum',
    steps: [1, 2, 1, 1, 2, 1, 1, 2, 1],
    aliases: ['Tcherepnin Nonatonic mode 1', 'Augmented-9']
  },
  {
    edo: 12,
    name: 'Moorish Phrygian',
    steps: [1, 2, 1, 1, 2, 1, 2, 1, 1],
    aliases: ['Raga Bhavmat Bhairav', 'Shivmat Bhairav', 'Phrygian/Double Harmonic Major mixed']
  },
  {
    edo: 12,
    name: 'Youlan scale: China',
    steps: [1, 1, 2, 1, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Chromatic and Diatonic Dorian mixed',
    steps: [1, 1, 1, 2, 2, 1, 1, 1, 2],
    aliases: ['Raga Amiri Todi']
  },
  {
    edo: 12,
    name: 'Chromatic and Permuted Diatonic Dorian mixed',
    steps: [1, 1, 2, 1, 2, 1, 1, 2, 1],
    aliases: ['Raga Tilak Bhairav']
  },
  {
    edo: 12,
    name: 'Houseini: Greece',
    steps: [2, 1, 1, 1, 2, 1, 1, 1, 2],
    aliases: ['Raga Lachari Todi', 'Rudra Manjiri', 'Modes of Major Pentatonic mixed']
  },
  {
    edo: 12,
    name: 'Duplex genus secundum',
    steps: [1, 2, 1, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Duplex genus secundum inverse',
    steps: [1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen mode 7',
    steps: [1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Messiaen mode 7 inverse',
    steps: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Major/Minor mixed',
    steps: [2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    aliases: ['Supermode']
  },
  {
    edo: 12,
    name: 'Minor Pentatonic with leading tones',
    steps: [2, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Maqam Shawq Afza',
    steps: [2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Basanti Kedar',
    steps: [1, 1, 2, 1, 1, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Gambhir Basant',
    steps: [1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Kaushi Bhairav',
    steps: [1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Lakshmi Todi',
    steps: [1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Raga Sindhi-Bhairavi',
    steps: [1, 1, 1, 1, 1, 2, 1, 2, 1, 1],
    aliases: ['Jaun Bhairav']
  },
  {
    edo: 12,
    name: 'Maqam Tarzanuyn',
    steps: [1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 12,
    name: 'Symmetrical Decatonic',
    steps: [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
    aliases: ['Raga Gaurimanjari']
  },
  {
    edo: 12,
    name: 'Raga Paraj Bahar',
    steps: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 12,
    name: 'Twelve-tone Chromatic (1/11-comma)',
    steps: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aliases: ['Raga Patmanjari']
  },
  {
    edo: 13,
    name: 'Blackwood Pentatonic',
    steps: [3, 3, 2, 3, 2],
    aliases: ['Quasi Slendro', 'Father-5']
  },
  {
    edo: 13,
    name: 'A-Team-5',
    steps: [3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 13,
    name: 'Lovecraft-5',
    steps: [3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Lovecraft-9',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Symmetrical Pentatonic',
    steps: [4, 1, 3, 1, 4],
    aliases: []
  },
  {
    edo: 13,
    name: 'Columns',
    steps: [4, 2, 1, 2, 4],
    aliases: []
  },
  {
    edo: 13,
    name: 'Developmental Ecstacy',
    steps: [3, 2, 2, 1, 2, 3],
    aliases: []
  },
  {
    edo: 13,
    name: 'Glacial-6',
    steps: [2, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Ryonian',
    steps: [2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Karakalian',
    steps: [2, 2, 2, 2, 2, 1, 2],
    aliases: ['Mixoryonian']
  },
  {
    edo: 13,
    name: 'Glacial-7',
    steps: [2, 2, 2, 2, 1, 2, 2],
    aliases: ['Lobonian']
  },
  {
    edo: 13,
    name: 'Horthatian',
    steps: [2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Oukranian',
    steps: [2, 2, 1, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Tamashian',
    steps: [2, 1, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Zo-Kalarian',
    steps: [1, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Diatronic',
    steps: [2, 2, 1, 3, 1, 2, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Polyzontal',
    steps: [1, 3, 2, 1, 2, 3, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Sephiroth-7',
    steps: [1, 1, 3, 1, 3, 1, 3],
    aliases: ['Triolic Diatonic']
  },
  {
    edo: 13,
    name: 'Quadriolic Diatonic',
    steps: [1, 1, 1, 4, 1, 1, 4],
    aliases: []
  },
  {
    edo: 13,
    name: 'Supermavila-7',
    steps: [1, 4, 1, 1, 4, 1, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Blackwood Subminor',
    steps: [1, 2, 1, 2, 2, 1, 2, 2],
    aliases: ['Sarnathian']
  },
  {
    edo: 13,
    name: 'Chalmers Major',
    steps: [1, 2, 2, 1, 2, 1, 2, 2],
    aliases: ['Hlanithian']
  },
  {
    edo: 13,
    name: 'Chalmers Minor',
    steps: [2, 1, 2, 2, 1, 2, 2, 1],
    aliases: ['Celephaisian', 'A-Team-8']
  },
  {
    edo: 13,
    name: 'Chalmers Triadic Minor',
    steps: [2, 1, 2, 2, 1, 2, 1, 2],
    aliases: ['Ultharian']
  },
  {
    edo: 13,
    name: 'Dylathian',
    steps: [2, 2, 1, 2, 2, 1, 2, 1],
    aliases: ['False Father']
  },
  {
    edo: 13,
    name: 'Ilarnekian',
    steps: [2, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Mnarian',
    steps: [2, 1, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Kadathian',
    steps: [1, 2, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Symmetrical Nonatonic',
    steps: [1, 2, 1, 1, 3, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 13,
    name: 'Sephiroth-10',
    steps: [1, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Rapoport Minor',
    steps: [1, 1, 2, 1, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 13,
    name: 'Rapoport Major',
    steps: [2, 1, 1, 1, 2, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 14,
    name: 'Quasi-equal Hexatonic',
    steps: [2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Gould Nonatonic',
    steps: [2, 1, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 14,
    name: 'Decimal-6',
    steps: [3, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 14,
    name: 'Decimal-10',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 14,
    name: 'Godzilla-5',
    steps: [2, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 14,
    name: 'Godzilla-9',
    steps: [2, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 14,
    name: 'Semaphore-5',
    steps: [3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 14,
    name: 'Semaphore-9',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Superpelog-Pelog',
    steps: [1, 2, 3, 2, 1, 2, 3],
    aliases: []
  },
  {
    edo: 14,
    name: 'Superpelog-9',
    steps: [1, 2, 1, 2, 1, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Urchin-6',
    steps: [3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Urchin-8',
    steps: [1, 2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Unicycle Gestures',
    steps: [2, 3, 1, 2, 3, 1, 2],
    aliases: []
  },
  {
    edo: 14,
    name: 'Triolic Diatonic',
    steps: [1, 1, 3, 1, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 15,
    name: 'Blackwood Decatonic',
    steps: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Blackwood Hexatonic',
    steps: [4, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Fifteen-tone "Major"',
    steps: [3, 2, 1, 3, 2, 3, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Fifteen-tone "Minor"',
    steps: [3, 1, 2, 3, 1, 3, 2],
    aliases: ['Natural Minor']
  },
  {
    edo: 15,
    name: 'Fifteen-tone Melodic Minor',
    steps: [3, 1, 2, 3, 2, 3, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Fifteen-tone Harmonic Minor',
    steps: [3, 1, 2, 3, 1, 4, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Fifteen-tone Harmonic Major',
    steps: [3, 2, 1, 3, 1, 4, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Fifteen-tone Major/Minor mixed',
    steps: [3, 1, 1, 1, 3, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Equal temperaments 3 and 5 mixed',
    steps: [3, 2, 1, 3, 1, 2, 3],
    aliases: []
  },
  {
    edo: 15,
    name: 'Twelve-tone Chromatic',
    steps: [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Horse OrgN',
    steps: [2, 3, 2, 1, 2, 3, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Archytas Clan-10',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Augene-12',
    steps: [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Augment-6',
    steps: [2, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 15,
    name: 'Augment-9',
    steps: [2, 1, 2, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Augment-12',
    steps: [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Hemikleismic-8',
    steps: [2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Inflated-12',
    steps: [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Kleismic-7',
    steps: [1, 3, 1, 3, 1, 3, 3],
    aliases: ['Triolic Diatonic']
  },
  {
    edo: 15,
    name: 'Kleismic-11',
    steps: [1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Nautilus-14',
    steps: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Miller\'s Porcupine-7',
    steps: [2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Miller\'s Porcupine-7 Major',
    steps: [2, 3, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Miller\'s Kusiro',
    steps: [1, 3, 2, 3, 1, 1, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Pentadecaphonic "Major"',
    steps: [2, 2, 1, 2, 2, 2, 2, 2],
    aliases: ['Jones\'s Porcupine-8']
  },
  {
    edo: 15,
    name: 'Porky-7',
    steps: [3, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Porky-8',
    steps: [2, 1, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Progress-13',
    steps: [1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Superkleismic-7',
    steps: [3, 1, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 15,
    name: 'Superkleismic-11',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Thuja-13',
    steps: [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 15,
    name: 'Triforce-6',
    steps: [3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Rempt\'s Andal scale',
    steps: [2, 2, 1, 2, 2, 1, 2, 2, 1],
    aliases: ['Triforce-9']
  },
  {
    edo: 15,
    name: 'Rempt\'s Andal scale inverse',
    steps: [1, 2, 2, 1, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 15,
    name: 'Madenda: Sunda',
    steps: [5, 1, 5, 3, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Pseudo Pelog',
    steps: [2, 2, 3, 2, 2, 2, 3],
    aliases: ['Pelogic-7', 'Antiionian']
  },
  {
    edo: 16,
    name: 'Harmonic Minor',
    steps: [3, 1, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Harmonic Minor inverse',
    steps: [2, 3, 2, 2, 3, 1, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Octatonic',
    steps: [1, 3, 1, 3, 1, 3, 1, 3],
    aliases: ['Neo-Diminished inverse']
  },
  {
    edo: 16,
    name: 'Neo-Diminished',
    steps: [3, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Armodue-7',
    steps: [2, 3, 2, 2, 2, 3, 2],
    aliases: ['Antidorian', 'Pelog Liwung: Sunda']
  },
  {
    edo: 16,
    name: 'Agmon Diatonic DS3',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 1],
    aliases: ['Armodue', 'Goldsmith', 'Superionian']
  },
  {
    edo: 16,
    name: 'Noll Pseudo-diatonic',
    steps: [1, 2, 2, 2, 2, 1, 2, 2, 2],
    aliases: ['Agmon Diatonic DS3 inverse', 'Superphrygian']
  },
  {
    edo: 16,
    name: 'Iafelice Pseudo-diatonic',
    steps: [2, 1, 2, 2, 1, 2, 2, 2, 1, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Astrology-6',
    steps: [3, 2, 3, 3, 2, 3],
    aliases: ['Lemba-6']
  },
  {
    edo: 16,
    name: 'Astrology-10',
    steps: [2, 1, 2, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Bipelog-14',
    steps: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Decibel-6',
    steps: [2, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Decibel-10',
    steps: [1, 2, 1, 2, 2, 1, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Gorgo-5',
    steps: [3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Gorgo-6',
    steps: [3, 3, 1, 3, 3, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Gorgo-Pelog',
    steps: [1, 3, 3, 2, 1, 3, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Gorgo-11',
    steps: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Lemba-10',
    steps: [2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Wilson Supradiatonic',
    steps: [2, 2, 1, 2, 2, 2, 2, 1, 2],
    aliases: ['Mabila-9', 'Supercorinthian']
  },
  {
    edo: 16,
    name: 'Mavila-5',
    steps: [5, 2, 2, 5, 2],
    aliases: ['Patet dang']
  },
  {
    edo: 16,
    name: 'Mavila-7',
    steps: [2, 3, 2, 2, 3, 2, 2],
    aliases: ['Antiaeolian', 'Hyperpentatonic', 'Pelog Jawar: Sunda']
  },
  {
    edo: 16,
    name: 'Mavila-9',
    steps: [2, 1, 2, 2, 2, 1, 2, 2, 2],
    aliases: ['Superaeolian']
  },
  {
    edo: 16,
    name: 'Flavell\'s Blues',
    steps: [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Patet deng',
    steps: [5, 2, 5, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Patet dong',
    steps: [2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Patet dung',
    steps: [2, 5, 2, 2, 5],
    aliases: []
  },
  {
    edo: 16,
    name: 'Pelogic-5',
    steps: [2, 2, 5, 2, 5],
    aliases: ['Patet ding']
  },
  {
    edo: 16,
    name: 'Antilocrian',
    steps: [3, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Antiphrygian',
    steps: [3, 2, 2, 2, 3, 2, 2],
    aliases: ['Pelog Sorog: Sunda']
  },
  {
    edo: 16,
    name: 'Antimixolydian',
    steps: [2, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Antilydian',
    steps: [2, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Superlydian',
    steps: [2, 2, 2, 2, 1, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Supermixolydian',
    steps: [2, 2, 2, 1, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Superolympian',
    steps: [2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Superdorian',
    steps: [2, 1, 2, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Superlocrian',
    steps: [1, 2, 2, 2, 1, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 1',
    steps: [2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 1 inverse',
    steps: [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 2',
    steps: [1, 2, 2, 3, 1, 2, 2, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 2 inverse',
    steps: [3, 2, 2, 1, 3, 2, 2, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 3',
    steps: [1, 1, 3, 3, 1, 1, 3, 3],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 3 inverse',
    steps: [3, 3, 1, 1, 3, 3, 1, 1],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 4',
    steps: [1, 1, 2, 4, 1, 1, 2, 4],
    aliases: []
  },
  {
    edo: 16,
    name: 'Truncated mode 4 inverse',
    steps: [4, 2, 1, 1, 4, 2, 1, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Twelve-tone Chromatic (2/11-comma positive)',
    steps: [2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Major',
    steps: [3, 3, 1, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Natural Minor',
    steps: [3, 1, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Melodic Minor',
    steps: [3, 1, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Harmonic Minor',
    steps: [3, 1, 3, 3, 1, 5, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Harmonic Major',
    steps: [3, 3, 1, 3, 1, 5, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Major Pentatonic',
    steps: [3, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 17,
    name: 'Seventeen-tone Minor Pentatonic',
    steps: [4, 3, 3, 4, 3],
    aliases: ['Supra-5', 'Salendro Sejati: Sunda']
  },
  {
    edo: 17,
    name: 'Seventeen-tone Suspended Pentatonic',
    steps: [3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Altered Melodic Minor',
    steps: [3, 1, 3, 3, 3, 2, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Pelog Degung Sejati: Sunda',
    steps: [6, 1, 3, 6, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Sorog Madenda Sejati: Sunda',
    steps: [6, 1, 6, 3, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Malaysian Pelog',
    steps: [2, 5, 3, 2, 5],
    aliases: []
  },
  {
    edo: 17,
    name: 'Neutral Dorian',
    steps: [2, 3, 2, 3, 2, 3, 2],
    aliases: ['Maqamic-7']
  },
  {
    edo: 17,
    name: 'Dante\'s Flying Machine',
    steps: [1, 4, 1, 4, 2, 1, 4],
    aliases: []
  },
  {
    edo: 17,
    name: 'Donut Dose',
    steps: [3, 2, 1, 3, 2, 1, 3, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Six Deployments',
    steps: [3, 3, 2, 4, 2, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Otonal 17',
    steps: [3, 2, 3, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Blues Peruvian',
    steps: [4, 3, 1, 1, 1, 4, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Pseudo Rast',
    steps: [3, 2, 2, 3, 3, 2, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Turkish Minor',
    steps: [3, 2, 2, 3, 1, 4, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Scorp',
    steps: [3, 2, 3, 1, 3, 2, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Screamapillar',
    steps: [3, 3, 2, 2, 3, 3, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Hydra',
    steps: [3, 3, 1, 1, 2, 3, 2, 1, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Beatles-7',
    steps: [3, 2, 2, 3, 2, 3, 2],
    aliases: ['Dichotic-7']
  },
  {
    edo: 17,
    name: 'Beatles-10',
    steps: [1, 2, 2, 2, 1, 2, 2, 1, 2, 2],
    aliases: ['Dichotic-10']
  },
  {
    edo: 17,
    name: 'Bleu-9',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: ['Jerome-9']
  },
  {
    edo: 17,
    name: 'Hajdu non-octave mode',
    steps: [2, 1, 3, 1, 3, 3, 1, 2, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Hemififths-10',
    steps: [1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Neutral Hypolydian',
    steps: [3, 2, 3, 2, 3, 2, 2],
    aliases: ['Mohajira-7']
  },
  {
    edo: 17,
    name: 'Neutral Hypolydian Decatonic',
    steps: [1, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: ['Mohajira-10']
  },
  {
    edo: 17,
    name: 'Neutral Dorian Decatonic',
    steps: [2, 1, 2, 2, 1, 2, 2, 2, 1, 2],
    aliases: ['Maqamic-10']
  },
  {
    edo: 17,
    name: 'Machine-5',
    steps: [3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Machine-6',
    steps: [3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Machine-11',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Neominor-7',
    steps: [1, 1, 3, 1, 3, 1, 3, 1, 3],
    aliases: ['Triolic Diatonic']
  },
  {
    edo: 17,
    name: 'Schism-12',
    steps: [1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 17,
    name: 'Sentinel-8',
    steps: [1, 4, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Secor Sentinel-11',
    steps: [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Supra-7',
    steps: [3, 1, 3, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 17,
    name: 'Supra-12',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Squares-11',
    steps: [3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1],
    aliases: []
  },
  {
    edo: 17,
    name: 'Squares-14',
    steps: [2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Balanced Mode',
    steps: [2, 4, 5, 1, 6],
    aliases: []
  },
  {
    edo: 18,
    name: 'Balanced Mode complement',
    steps: [2, 2, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Bicycle',
    steps: [4, 4, 1, 4, 4, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Dicot-7',
    steps: [2, 3, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 18,
    name: 'Father-5',
    steps: [4, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 18,
    name: 'Father-8',
    steps: [3, 1, 3, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Hexe-12',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Octokaidecal-8',
    steps: [2, 2, 2, 3, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 18,
    name: 'Octokaidecal-10',
    steps: [2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Semisept-13',
    steps: [2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 18,
    name: 'Supersharp-8',
    steps: [2, 2, 3, 2, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 18,
    name: 'Supersharp-10',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 18,
    name: 'Louvier Prelude et Fugue 2',
    steps: [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3],
    aliases: []
  },
  {
    edo: 18,
    name: 'Wilson Supradiatonic',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Meantone Chromatic (1/3-comma)',
    steps: [1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Four out of 19',
    steps: [5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Five out of 19',
    steps: [4, 4, 4, 4, 3],
    aliases: ['Godzilla-5 inverse']
  },
  {
    edo: 19,
    name: 'Nineteen-tone Major Pentatonic',
    steps: [3, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Minor Pentatonic',
    steps: [5, 3, 3, 5, 3],
    aliases: ['Yasser\'s Infradiatonic inverse']
  },
  {
    edo: 19,
    name: 'Nineteen-tone Suspended Pentatonic',
    steps: [3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Quasi-equal Pentatonic',
    steps: [4, 4, 3, 4, 4],
    aliases: ['Semaphore-5']
  },
  {
    edo: 19,
    name: 'Yasser\'s Infradiatonic',
    steps: [3, 5, 3, 3, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Yasser\'s Hexad',
    steps: [3, 3, 3, 3, 3, 4],
    aliases: ['Spell-6']
  },
  {
    edo: 19,
    name: 'Nineteen-tone Major',
    steps: [3, 3, 2, 3, 3, 3, 2],
    aliases: ['Ionian']
  },
  {
    edo: 19,
    name: 'Nineteen-tone Natural Minor',
    steps: [3, 2, 3, 3, 2, 3, 3],
    aliases: ['Aeolian']
  },
  {
    edo: 19,
    name: 'Nineteen-tone Melodic Minor',
    steps: [3, 2, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Harmonic Minor',
    steps: [3, 2, 3, 3, 2, 4, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Harmonic Major',
    steps: [3, 3, 2, 3, 2, 4, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Full Minor',
    steps: [3, 2, 3, 3, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Dorian',
    steps: [3, 2, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Phrygian',
    steps: [2, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Lydian',
    steps: [3, 3, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Mixolydian',
    steps: [3, 3, 2, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Nineteen-tone Locrian',
    steps: [2, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Harmonic Major sharp 5',
    steps: [3, 3, 2, 4, 1, 4, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Genus diatonico-chromaticum',
    steps: [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
    aliases: ['Yasser\'s Supradiatonic inverse']
  },
  {
    edo: 19,
    name: 'Keenan Eleven out of 19',
    steps: [3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Krantz Eleven out of 19',
    steps: [2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'McLaren Eleven out of 19',
    steps: [3, 1, 1, 3, 1, 1, 1, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Noll Pseudo-diatonic',
    steps: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Negri\'s Ten Plus Nine',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: ['Negri-10']
  },
  {
    edo: 19,
    name: 'Cartunes',
    steps: [2, 3, 1, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 19,
    name: 'Oljare Diminished',
    steps: [4, 1, 4, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 19,
    name: 'Oljare Augmented',
    steps: [5, 1, 5, 1, 1, 5, 1],
    aliases: ['Magic-7']
  },
  {
    edo: 19,
    name: 'Oljare Octatonic',
    steps: [2, 2, 3, 2, 2, 3, 2, 3],
    aliases: ['Sensi-8']
  },
  {
    edo: 19,
    name: 'Oljare Pentaenharmonic',
    steps: [1, 3, 1, 3, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Gould Eleven out of 19',
    steps: [2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Rousseau Tri-Blues',
    steps: [1, 2, 1, 3, 1, 1, 2, 1, 3, 1, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Yasser\'s Supradiatonic',
    steps: [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
    aliases: ['Genus diatonico-chromaticum inverse']
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Mixolydian',
    steps: [1, 2, 5, 1, 2, 5, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Lydian',
    steps: [2, 5, 1, 2, 5, 3, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Phrygian',
    steps: [5, 1, 2, 5, 3, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Dorian',
    steps: [1, 2, 5, 3, 1, 2, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Hypolydian',
    steps: [2, 5, 3, 1, 2, 5, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Hypophrygian',
    steps: [5, 3, 1, 2, 5, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Ratio 1:2 Chromatic Hypodorian',
    steps: [3, 1, 2, 5, 1, 2, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Kleismic-7',
    steps: [1, 4, 1, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 19,
    name: 'Kleismic-8',
    steps: [1, 4, 1, 4, 1, 4, 1, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Kleismic-11',
    steps: [1, 1, 3, 1, 3, 1, 1, 3, 1, 1, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Kleismic-15',
    steps: [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Father-5',
    steps: [5, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Father-8',
    steps: [3, 2, 3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Glacial-7',
    steps: [3, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Glacial-13',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Godzilla-5',
    steps: [3, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 19,
    name: 'Godzilla-9',
    steps: [3, 3, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Godzilla-14',
    steps: [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Liese-5',
    steps: [1, 8, 1, 1, 8],
    aliases: []
  },
  {
    edo: 19,
    name: 'Liese-7',
    steps: [1, 1, 7, 1, 1, 1, 7],
    aliases: []
  },
  {
    edo: 19,
    name: 'Liese-9',
    steps: [1, 1, 1, 6, 1, 1, 1, 1, 6],
    aliases: []
  },
  {
    edo: 19,
    name: 'Liese-11',
    steps: [1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Negri-9',
    steps: [2, 2, 2, 2, 3, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Straub Whole-Tone',
    steps: [2, 1, 2, 1, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Magic-10',
    steps: [4, 1, 1, 1, 4, 1, 1, 4, 1, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Magic-13',
    steps: [3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Muggles-13',
    steps: [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Semaphore-9',
    steps: [3, 1, 3, 1, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Semaphore-14',
    steps: [1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Sensi-5',
    steps: [2, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 19,
    name: 'Sensi-11',
    steps: [2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Spell-7',
    steps: [3, 3, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Starling-12',
    steps: [1, 3, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Unsmate-13',
    steps: [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Tritonic Diatonic',
    steps: [1, 2, 1, 2, 1, 2, 1, 3, 3, 3],
    aliases: ['Spell-10']
  },
  {
    edo: 19,
    name: 'Mandelbaum Eight out of 19',
    steps: [2, 3, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 19,
    name: 'Mandelbaum Nine out of 19',
    steps: [2, 2, 3, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Mandelbaum Ten out of 19',
    steps: [2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Mandelbaum Eleven out of 19',
    steps: [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 19,
    name: 'Mandelbaum Twelve out of 19',
    steps: [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2],
    aliases: ['Yasser\'s Diatonic']
  },
  {
    edo: 19,
    name: 'Yasser\'s Diatonic inverse',
    steps: [2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 19,
    name: 'Mandelbaum Thirteen out of 19',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1],
    aliases: ['Spell-13']
  },
  {
    edo: 19,
    name: 'Mandelbaum Fourteen out of 19',
    steps: [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 20,
    name: 'Twelve-tone Chromatic',
    steps: [2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 20,
    name: 'Twenty-tone "Major"',
    steps: [4, 3, 1, 4, 3, 4, 1],
    aliases: []
  },
  {
    edo: 20,
    name: 'Twenty-tone "Minor"',
    steps: [4, 1, 3, 4, 1, 4, 3],
    aliases: []
  },
  {
    edo: 20,
    name: 'Stearns Major',
    steps: [3, 4, 1, 4, 3, 3, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Octatonic',
    steps: [2, 3, 2, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 20,
    name: 'Diminished',
    steps: [3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Balzano Nine-tone',
    steps: [2, 3, 2, 2, 2, 3, 2, 2, 2],
    aliases: ['Hyperpentatonic', 'Score-9']
  },
  {
    edo: 20,
    name: 'Balzano Eleven-tone',
    steps: [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    aliases: ['Agmon Diatonic DS4', 'Noll Pseudo-diatonic']
  },
  {
    edo: 20,
    name: 'Balzano Nine-tone inverse',
    steps: [2, 2, 2, 3, 2, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Balzano Eleven-tone inverse',
    steps: [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
    aliases: ['Agmon Diatonic DS4 inverse']
  },
  {
    edo: 20,
    name: 'Rothenberg Generalized Diatonic',
    steps: [3, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Zweifel Major',
    steps: [2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Zweifel Natural Minor',
    steps: [2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Major quasi-equal Heptatonic',
    steps: [3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Minor quasi-equal Heptatonic',
    steps: [3, 2, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 20,
    name: 'Blackbirds-12',
    steps: [1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 20,
    name: 'Bossier-11',
    steps: [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4],
    aliases: ['Quadriolic Diatonic']
  },
  {
    edo: 20,
    name: 'Bossier-14',
    steps: [1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 20,
    name: 'Pelogic-7',
    steps: [2, 2, 5, 2, 2, 2, 5],
    aliases: ['Antiionian']
  },
  {
    edo: 20,
    name: 'Score-5',
    steps: [7, 2, 7, 2, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Score-7',
    steps: [5, 2, 2, 5, 2, 2, 2],
    aliases: []
  },
  {
    edo: 20,
    name: 'Score-11',
    steps: [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
    aliases: ['Diatonicized Chromatic']
  },
  {
    edo: 20,
    name: 'Zinith-9',
    steps: [3, 2, 2, 2, 3, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'Twelve-tone Chromatic',
    steps: [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'Quasi-equal Pentatonic',
    steps: [4, 4, 5, 4, 4],
    aliases: ['Gorgo-5']
  },
  {
    edo: 21,
    name: 'Quasi-equal Hexatonic',
    steps: [4, 3, 4, 3, 4, 3],
    aliases: ['Ternary-6']
  },
  {
    edo: 21,
    name: 'Quasi-equal Enneatonic',
    steps: [2, 3, 2, 2, 3, 2, 2, 3, 2],
    aliases: ['Deflated-9']
  },
  {
    edo: 21,
    name: 'Augment-6',
    steps: [3, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 21,
    name: 'Augment-9',
    steps: [3, 1, 3, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 21,
    name: 'Augment-15',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'August-6',
    steps: [5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'August-9',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'August-12',
    steps: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'Father-5',
    steps: [5, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 21,
    name: 'Father-8',
    steps: [3, 2, 3, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 21,
    name: 'Gorgo-6',
    steps: [4, 4, 1, 4, 4, 4],
    aliases: []
  },
  {
    edo: 21,
    name: 'Gorgo-Pelog',
    steps: [1, 4, 4, 3, 1, 4, 4],
    aliases: []
  },
  {
    edo: 21,
    name: 'Gorgo-11',
    steps: [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'Miracle-10',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 21,
    name: 'Miracle-11',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'Oodako-9',
    steps: [3, 3, 1, 3, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'Septimal-14',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'Spartan-11',
    steps: [3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 21,
    name: 'Subklei-13',
    steps: [1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3],
    aliases: []
  },
  {
    edo: 21,
    name: 'Tridec-8',
    steps: [3, 2, 3, 2, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 21,
    name: 'Pelog Lima',
    steps: [2, 3, 7, 2, 7],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twelve-tone Chromatic (1/3-comma positive)',
    steps: [3, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Major',
    steps: [4, 4, 1, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Minor',
    steps: [4, 1, 4, 4, 1, 4, 4],
    aliases: ['Superpyth-7']
  },
  {
    edo: 22,
    name: 'Twenty-two tone "Just" Major',
    steps: [4, 3, 2, 4, 3, 4, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Natural Minor',
    steps: [4, 2, 3, 4, 2, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Melodic Minor',
    steps: [4, 2, 3, 4, 3, 4, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Harmonic Minor',
    steps: [4, 2, 3, 4, 2, 5, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Harmonic Major',
    steps: [4, 3, 2, 4, 2, 5, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Harmonic Whole-Tone',
    steps: [4, 3, 3, 4, 4, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Blackdye Ionian',
    steps: [3, 1, 3, 2, 3, 1, 3, 1, 3, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Antikythera-6',
    steps: [4, 3, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Antikythera-10',
    steps: [3, 1, 3, 3, 1, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: '"9-limit" Consonant Whole-Tone',
    steps: [4, 3, 4, 4, 3, 4],
    aliases: ['Astrology-6']
  },
  {
    edo: 22,
    name: 'Astrology-10',
    steps: [3, 1, 3, 3, 1, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Bipyth-12',
    steps: [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Doublewide-10',
    steps: [1, 4, 1, 4, 1, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Doublewide-14',
    steps: [1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Fleetwood-14',
    steps: [1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Hedgehog-6',
    steps: [5, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Hedgehog-8',
    steps: [2, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Hedgehog-14',
    steps: [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Jubilee-12',
    steps: [2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Magic-7',
    steps: [6, 1, 6, 1, 1, 6, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Magic-10',
    steps: [5, 1, 1, 1, 5, 1, 1, 5, 1, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Magic-13',
    steps: [4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Orwell-5',
    steps: [5, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Orwell-9',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Orwell-13',
    steps: [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Rezsutek\'s Percussion scale',
    steps: [2, 3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Pajara-12',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Porky-8',
    steps: [3, 1, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Porky-15',
    steps: [1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Superpyth-12',
    steps: [1, 3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Supra-7',
    steps: [4, 1, 4, 4, 4, 1, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Supra-12',
    steps: [1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Urchin-14',
    steps: [2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Wilson Pi-Meantone',
    steps: [3, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Septimal Minor Pentatonic',
    steps: [5, 4, 4, 5, 4],
    aliases: ['Supra-5']
  },
  {
    edo: 22,
    name: 'Double Harmonic Major',
    steps: [2, 5, 2, 4, 2, 5, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Major quasi-equal Heptatonic',
    steps: [4, 3, 3, 3, 3, 3, 3],
    aliases: ['Porky-7']
  },
  {
    edo: 22,
    name: 'Minor quasi-equal Heptatonic',
    steps: [3, 3, 3, 4, 3, 3, 3],
    aliases: ['Miller\'s Porcupine-7']
  },
  {
    edo: 22,
    name: 'Miller\'s Porcupine-7 Major',
    steps: [3, 4, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Ionian Porcupine',
    steps: [4, 3, 2, 4, 3, 3, 3],
    aliases: ['Lizard Porcupine']
  },
  {
    edo: 22,
    name: 'Dorian Porcupine',
    steps: [4, 2, 3, 4, 3, 3, 3],
    aliases: ['Leopardian Porcupine']
  },
  {
    edo: 22,
    name: 'Aeolian Porcupine',
    steps: [3, 3, 3, 4, 2, 3, 4],
    aliases: ['Pantherian Porcupine']
  },
  {
    edo: 22,
    name: 'Major Porcupine',
    steps: [4, 3, 3, 3, 3, 4, 2],
    aliases: ['Horse Porcupine']
  },
  {
    edo: 22,
    name: 'Major-Minor Porcupine',
    steps: [4, 3, 3, 3, 2, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Minor Porcupine',
    steps: [4, 2, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Chameleon Porcupine',
    steps: [4, 3, 3, 3, 4, 3, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Iguana Porcupine',
    steps: [3, 3, 3, 4, 3, 2, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Serpent Porcupine',
    steps: [3, 3, 4, 3, 2, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Adder Porcupine',
    steps: [3, 4, 3, 2, 4, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Turtle Porcupine',
    steps: [3, 2, 4, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Crocodile Porcupine',
    steps: [2, 4, 3, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Symmetric Diminished Porcupine',
    steps: [3, 3, 4, 2, 4, 3, 3],
    aliases: ['Llama Porcupine']
  },
  {
    edo: 22,
    name: 'Pig Porcupine',
    steps: [2, 4, 3, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Cow Porcupine',
    steps: [3, 4, 2, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Goat Porcupine',
    steps: [3, 3, 3, 4, 2, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Rooster Porcupine',
    steps: [3, 3, 3, 3, 4, 2, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Lionian Porcupine',
    steps: [4, 3, 3, 3, 4, 2, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Tigonian Porcupine',
    steps: [3, 4, 3, 3, 3, 4, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Cougian Porcupine',
    steps: [2, 3, 4, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Cheetian Porcupine',
    steps: [3, 4, 2, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Jaguarian Porcupine',
    steps: [3, 3, 4, 2, 3, 4, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Jones\'s Porcupine-8',
    steps: [3, 3, 1, 3, 3, 3, 3, 3],
    aliases: ['Salmon Porcupine']
  },
  {
    edo: 22,
    name: 'Octopus Porcupine',
    steps: [3, 3, 3, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Mantis Porcupine',
    steps: [3, 3, 3, 3, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Dolphin Porcupine',
    steps: [3, 3, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Crab Porcupine',
    steps: [3, 3, 3, 3, 1, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Tuna Porcupine',
    steps: [3, 3, 3, 1, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Starfish Porcupine',
    steps: [3, 1, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Whale Porcupine',
    steps: [1, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Porcupine-15',
    steps: [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Freivald-Porcupine',
    steps: [3, 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Alternate Proper Decatonic',
    steps: [3, 1, 3, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Exotic Symmetrical Decatonic',
    steps: [2, 2, 3, 1, 3, 2, 2, 3, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Elevenplus',
    steps: [2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Hexachordal',
    steps: [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Noll Pseudo-diatonic',
    steps: [2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 22,
    name: 'Ballooning Rushes',
    steps: [3, 1, 6, 2, 6, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Crushed Oranges',
    steps: [1, 3, 5, 1, 3, 5, 1, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Kathartic Parts',
    steps: [2, 1, 7, 2, 1, 7, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Rivetting Reds',
    steps: [1, 4, 1, 4, 2, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Rodentalia',
    steps: [4, 1, 3, 1, 4, 1, 3, 1, 4],
    aliases: []
  },
  {
    edo: 22,
    name: 'Standard Pentachordal Major',
    steps: [2, 2, 3, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Static Symmetrical Major',
    steps: [2, 2, 3, 2, 2, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Alternate Pentachordal Major',
    steps: [2, 3, 2, 2, 2, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Dynamic Symmetrical Major',
    steps: [2, 3, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Standard Pentachordal Minor',
    steps: [2, 2, 2, 3, 2, 2, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 22,
    name: 'Static Symmetrical Minor',
    steps: [2, 2, 2, 3, 2, 2, 2, 2, 3, 2],
    aliases: ['Pajara-10']
  },
  {
    edo: 22,
    name: 'Alternate Pentachordal Minor',
    steps: [2, 2, 2, 2, 3, 2, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Dynamic Symmetrical Minor',
    steps: [2, 2, 2, 2, 3, 2, 2, 2, 2, 3],
    aliases: ['Bipyth-10']
  },
  {
    edo: 22,
    name: 'Pentachordal Decatonic',
    steps: [3, 2, 2, 2, 3, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 22,
    name: 'Twenty-two tone Blues',
    steps: [6, 3, 1, 3, 6, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Anti-pentatonic',
    steps: [5, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 23,
    name: 'Oneiro-pentatonic',
    steps: [5, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 23,
    name: 'Symmetrical Heptatonic',
    steps: [3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Armodue-7',
    steps: [3, 4, 3, 3, 3, 4, 3],
    aliases: ['Antidorian']
  },
  {
    edo: 23,
    name: 'Armodue-9',
    steps: [3, 3, 3, 1, 3, 3, 3, 3, 1],
    aliases: ['Superionian']
  },
  {
    edo: 23,
    name: 'Beep-5',
    steps: [5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Beep-9',
    steps: [3, 2, 3, 2, 3, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Beep-14',
    steps: [2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Dichosis-7',
    steps: [2, 5, 2, 5, 2, 5, 2],
    aliases: ['Mosh']
  },
  {
    edo: 23,
    name: 'Dichosis-10',
    steps: [2, 3, 2, 2, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Dichosis-13',
    steps: [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Greeley-8',
    steps: [2, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Greeley-15',
    steps: [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Machinoid-6',
    steps: [4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Machinoid-11',
    steps: [3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Mavila-5',
    steps: [7, 3, 3, 7, 3],
    aliases: ['Patet dang']
  },
  {
    edo: 23,
    name: 'Mavila-7',
    steps: [3, 4, 3, 3, 4, 3, 3],
    aliases: ['Antiaeolian']
  },
  {
    edo: 23,
    name: 'Mavila-9',
    steps: [3, 1, 3, 3, 3, 1, 3, 3, 3],
    aliases: ['Superaeolian']
  },
  {
    edo: 23,
    name: 'Minoid-15',
    steps: [3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Patet deng',
    steps: [7, 3, 7, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Patet dong',
    steps: [3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Patet dung',
    steps: [3, 7, 3, 3, 7],
    aliases: []
  },
  {
    edo: 23,
    name: 'Pelogic-5',
    steps: [3, 3, 7, 3, 7],
    aliases: ['Patet ding']
  },
  {
    edo: 23,
    name: 'Pelogic-7',
    steps: [3, 3, 3, 4, 3, 3, 4],
    aliases: ['Antilydian']
  },
  {
    edo: 23,
    name: 'Antilocrian',
    steps: [4, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Antiionian',
    steps: [3, 3, 4, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 23,
    name: 'Antiphrygian',
    steps: [4, 3, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Antimixolydian',
    steps: [3, 3, 4, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Onyxwood',
    steps: [3, 2, 3, 1, 3, 2, 3, 1, 3, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Ripple-12',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Semaphore-5',
    steps: [5, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 23,
    name: 'Semaphore-14',
    steps: [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Starlingtet-7',
    steps: [5, 1, 5, 1, 5, 1, 5],
    aliases: []
  },
  {
    edo: 23,
    name: 'Stearns 9-tone',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 3],
    aliases: ['Semaphore-9']
  },
  {
    edo: 23,
    name: 'Stearns 11-tone',
    steps: [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Superpelog-Pelog',
    steps: [2, 3, 5, 3, 2, 3, 5],
    aliases: []
  },
  {
    edo: 23,
    name: 'Superpelog-9',
    steps: [2, 3, 2, 3, 2, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 23,
    name: 'Superpelog-14',
    steps: [2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Oneirotonic',
    steps: [4, 1, 4, 4, 1, 4, 4, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Porcupoid',
    steps: [3, 3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Sephiroid',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 23,
    name: 'Kleistonic',
    steps: [4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Ateamtonic',
    steps: [3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Brittle Titanium',
    steps: [2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 23,
    name: 'Wilson Supradiatonic',
    steps: [3, 3, 1, 3, 3, 3, 3, 1, 3],
    aliases: ['Supercorinthian']
  },
  {
    edo: 23,
    name: 'Enshrouded House of Kundalini',
    steps: [2, 1, 4, 2, 1, 4, 2, 1, 4, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Mixolydian',
    steps: [1, 1, 8, 1, 1, 8, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Lydian',
    steps: [1, 8, 1, 1, 8, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Phrygian',
    steps: [8, 1, 1, 8, 4, 1, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Dorian',
    steps: [1, 1, 8, 4, 1, 1, 8],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Hypolydian',
    steps: [1, 8, 4, 1, 1, 8, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Hypophrygian',
    steps: [8, 4, 1, 1, 8, 1, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Enharmonic Hypodorian',
    steps: [4, 1, 1, 8, 1, 1, 8],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Mixolydian',
    steps: [2, 3, 5, 2, 3, 5, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Lydian',
    steps: [3, 5, 2, 3, 5, 4, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Phrygian',
    steps: [5, 2, 3, 5, 4, 2, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Dorian',
    steps: [2, 3, 5, 4, 2, 3, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Hypolydian',
    steps: [3, 5, 4, 2, 3, 5, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Hypophrygian',
    steps: [5, 4, 2, 3, 5, 2, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Soft Diatonic Hypodorian',
    steps: [4, 2, 3, 5, 2, 3, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Ouchairan-Hussaini',
    steps: [3, 3, 4, 3, 3, 4, 4],
    aliases: ['Bayatan', 'Neutral Diatonic Mixolydian']
  },
  {
    edo: 24,
    name: 'Dastgah-e Sehgah',
    steps: [3, 4, 3, 3, 4, 4, 3],
    aliases: ['Neutral Diatonic Lydian']
  },
  {
    edo: 24,
    name: 'Arabic Diatonic',
    steps: [4, 3, 3, 4, 4, 3, 3],
    aliases: ['Maqam Rast', 'Quasi-equal Heptatonic', 'Neutral Diatonic Phrygian', 'Ioniodorian']
  },
  {
    edo: 24,
    name: 'Maqam Hussaini',
    steps: [3, 3, 4, 4, 3, 3, 4],
    aliases: ['Ushaq', 'Neutral Diatonic Dorian']
  },
  {
    edo: 24,
    name: 'Maqam Sikah (Segah)',
    steps: [3, 4, 4, 3, 3, 4, 3],
    aliases: ['Neutral Diatonic Hypolydian']
  },
  {
    edo: 24,
    name: 'Neutral Diatonic Hypophrygian',
    steps: [4, 4, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Miha\'il Musaqa\'s modes: Egypt',
    steps: [4, 3, 3, 4, 3, 3, 4],
    aliases: ['Neutral Diatonic Hypodorian', 'Dastgah-e Sehgah', 'Maqam Nairuz']
  },
  {
    edo: 24,
    name: 'Athanasopoulos\' Byzantine Liturgical Chromatic',
    steps: [3, 5, 2, 4, 3, 5, 2],
    aliases: ['Dastgah-e Chahargah']
  },
  {
    edo: 24,
    name: 'Dastgah-e Nava',
    steps: [4, 2, 4, 4, 3, 3, 4],
    aliases: ['Maqam Ushaq Masri']
  },
  {
    edo: 24,
    name: 'Turkish Minor',
    steps: [4, 2, 4, 4, 2, 5, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Altered Melodic Minor',
    steps: [4, 2, 4, 4, 4, 3, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Mixolydian',
    steps: [1, 5, 4, 1, 5, 4, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Lydian',
    steps: [5, 4, 1, 5, 4, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Phrygian',
    steps: [4, 1, 5, 4, 4, 1, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Dorian',
    steps: [1, 5, 4, 4, 1, 5, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Hypolydian',
    steps: [5, 4, 4, 1, 5, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Hypophrygian',
    steps: [4, 4, 1, 5, 4, 1, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Diatonic + Enharmonic Diesis Hypodorian',
    steps: [4, 1, 5, 4, 1, 5, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Mixolydian',
    steps: [1, 3, 6, 1, 3, 6, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Lydian',
    steps: [3, 6, 1, 3, 6, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Phrygian',
    steps: [6, 1, 3, 6, 4, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Dorian',
    steps: [1, 3, 6, 4, 1, 3, 6],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Hypolydian',
    steps: [3, 6, 4, 1, 3, 6, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Hypophrygian',
    steps: [6, 4, 1, 3, 6, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Chromatic/Enharmonic Hypodorian',
    steps: [4, 1, 3, 6, 1, 3, 6],
    aliases: []
  },
  {
    edo: 24,
    name: 'Neutral Mixolydian',
    steps: [3, 4, 3, 3, 4, 3, 4],
    aliases: ['Iced Blizzard']
  },
  {
    edo: 24,
    name: 'Neutral Lydian',
    steps: [4, 3, 3, 4, 3, 4, 3],
    aliases: ['Iced Major']
  },
  {
    edo: 24,
    name: 'Neutral Phrygian',
    steps: [3, 3, 4, 3, 4, 3, 4],
    aliases: ['Iced Locrian']
  },
  {
    edo: 24,
    name: 'Neutral Dorian',
    steps: [3, 4, 3, 4, 3, 4, 3],
    aliases: ['Misaelides 2nd Byzantine mode', 'Iced Fridgian', 'Maqam Sikah Baladi', 'Maqamic-7', 'Ioniophrygian']
  },
  {
    edo: 24,
    name: 'Neutral Hypolydian',
    steps: [4, 3, 4, 3, 4, 3, 3],
    aliases: ['Mohajira-7', 'Iced Lydian']
  },
  {
    edo: 24,
    name: 'Neutral Hypophrygian',
    steps: [3, 4, 3, 4, 3, 3, 4],
    aliases: ['Iced Mixolydian']
  },
  {
    edo: 24,
    name: 'Neutral Hypodorian',
    steps: [4, 3, 4, 3, 3, 4, 3],
    aliases: ['Iced Dark Lydian']
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Mixolydian',
    steps: [1, 2, 7, 1, 2, 7, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Lydian',
    steps: [2, 7, 1, 2, 7, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Phrygian',
    steps: [7, 1, 2, 7, 4, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Dorian',
    steps: [1, 2, 7, 4, 1, 2, 7],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Hypolydian',
    steps: [2, 7, 4, 1, 2, 7, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Hypophrygian',
    steps: [7, 4, 1, 2, 7, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ratio 1:2 Hemiolic Chromatic Hypodorian',
    steps: [4, 1, 2, 7, 1, 2, 7],
    aliases: []
  },
  {
    edo: 24,
    name: 'Second plagal Byzantine Liturgical mode',
    steps: [2, 7, 1, 4, 2, 7, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Quasi-equal Pentatonic',
    steps: [5, 5, 4, 5, 5],
    aliases: ['Semaphore-5']
  },
  {
    edo: 24,
    name: 'Maqam \'Ushshaq Turki',
    steps: [3, 3, 4, 4, 2, 4, 4],
    aliases: ['Urfa', 'Isfahan', 'Dastgah-e Shur']
  },
  {
    edo: 24,
    name: 'Maqam Bayati',
    steps: [3, 3, 4, 4, 2, 1, 3, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Nahfat',
    steps: [3, 3, 4, 4, 4, 2, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Saba',
    steps: [3, 3, 2, 6, 2, 4, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Saba',
    steps: [3, 3, 2, 6, 2, 4, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Sabr Jadid',
    steps: [3, 3, 2, 6, 2, 6, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Mansuri',
    steps: [3, 3, 2, 2, 4, 3, 3, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Suznak (Soznak)',
    steps: [4, 3, 3, 4, 2, 6, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Rast',
    steps: [4, 3, 3, 4, 4, 2, 1, 3],
    aliases: ['Dilkashidah', 'Dilnishin']
  },
  {
    edo: 24,
    name: 'Maqam Mahur',
    steps: [4, 3, 3, 4, 4, 4, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Yakah',
    steps: [4, 3, 1, 2, 1, 3, 4, 2, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Suzidil \'ara',
    steps: [4, 3, 1, 2, 4, 4, 2, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Qarjighar',
    steps: [3, 3, 4, 2, 6, 2, 4],
    aliases: ['Bayati Shuri']
  },
  {
    edo: 24,
    name: 'Maqam Huzzam',
    steps: [3, 4, 2, 2, 2, 2, 2, 4, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Hizam (Huzzam',
    steps: [3, 4, 2, 6, 2, 4, 3],
    aliases: ['El Houzam)', 'Rahat al Arouah']
  },
  {
    edo: 24,
    name: 'Maqam Rahat al-Arwah',
    steps: [3, 4, 2, 6, 2, 4, 2, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Iraq',
    steps: [3, 4, 3, 3, 4, 4, 2, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Hijaz',
    steps: [2, 6, 2, 4, 2, 1, 3, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Musta\'ar',
    steps: [3, 4, 4, 2, 1, 3, 4, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Farahnak',
    steps: [3, 4, 4, 4, 2, 4, 2, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Bastanikar',
    steps: [3, 4, 3, 3, 2, 6, 2, 1],
    aliases: ['Tarz Nuin (Tarznauyn)']
  },
  {
    edo: 24,
    name: 'Maqam Farah Faza',
    steps: [4, 2, 6, 2, 4, 2, 1, 3],
    aliases: ['Maqam Nakriz']
  },
  {
    edo: 24,
    name: 'Maqam Hayyan',
    steps: [4, 2, 1, 3, 2, 2, 2, 2, 3, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Basandida',
    steps: [4, 2, 1, 3, 2, 2, 4, 2, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Shawq Afza',
    steps: [4, 4, 2, 1, 3, 2, 2, 4, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Shawq Tarab',
    steps: [2, 1, 3, 2, 2, 4, 2, 4, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Jabburi',
    steps: [3, 1, 2, 4, 4, 2, 4, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Nawa',
    steps: [2, 4, 4, 4, 3, 3, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Higaz-kar',
    steps: [2, 5, 3, 4, 2, 5, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Su\'ar',
    steps: [3, 4, 4, 2, 4, 4, 3],
    aliases: ['Naghmeh Abuata', 'Naghmeh Afshari']
  },
  {
    edo: 24,
    name: 'Maqam Jahargah (Jiharkah)',
    steps: [4, 4, 2, 4, 4, 3, 3],
    aliases: ['Naghmeh Bayat-e Tork', 'Naghmeh Dashti']
  },
  {
    edo: 24,
    name: 'Maqam \'Ajam Murassah',
    steps: [4, 4, 3, 3, 4, 4, 2],
    aliases: ['Ioniolydian']
  },
  {
    edo: 24,
    name: 'Dastgah-e Homayun',
    steps: [3, 5, 2, 4, 2, 4, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Naghmeh Esfahan',
    steps: [4, 2, 4, 4, 3, 5, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam \'Awg \'ara (Aug-ara)',
    steps: [3, 6, 1, 5, 2, 6, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Buselik',
    steps: [4, 1, 5, 4, 2, 6, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Maqam Neuter',
    steps: [4, 2, 6, 2, 2, 5, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Anchi Hoye version 2: Ethiopia',
    steps: [2, 8, 3, 6, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Dance scale of Yi people: China',
    steps: [4, 3, 3, 4, 4, 2, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Daniel-mode of Spanish-Arab Jews',
    steps: [4, 4, 2, 3, 1, 4, 6],
    aliases: []
  },
  {
    edo: 24,
    name: 'Spondeion',
    steps: [3, 7, 4, 3, 7],
    aliases: []
  },
  {
    edo: 24,
    name: 'Spondeiakos',
    steps: [1, 1, 8, 4, 2, 8],
    aliases: []
  },
  {
    edo: 24,
    name: 'Dalmonte 8-tone',
    steps: [1, 4, 4, 2, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Spongework',
    steps: [1, 5, 3, 1, 5, 3, 1, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Xiangliu',
    steps: [4, 4, 2, 1, 3, 4, 3, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Rimsky-Korsakov Major',
    steps: [3, 2, 3, 2, 2, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Rimsky-Korsakov Neutral',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Rimsky-Korsakov Bineutral',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Rimsky-Korsakov Minor',
    steps: [3, 2, 1, 4, 2, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Hyperpentatonic',
    steps: [2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Hába Pentatonic',
    steps: [5, 5, 5, 5, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'de Vries 5-tone',
    steps: [9, 2, 2, 9, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ellis\' Maverick',
    steps: [7, 3, 3, 1, 6, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ives\' Scale',
    steps: [4, 4, 3, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'de Vries 9-tone',
    steps: [4, 1, 4, 1, 4, 1, 4, 1, 4],
    aliases: ['Semaphore-9']
  },
  {
    edo: 24,
    name: 'de Vries 13-tone',
    steps: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
    aliases: ['Agmon Diatonic DS5 inverse']
  },
  {
    edo: 24,
    name: 'Anguirus-10',
    steps: [2, 2, 3, 2, 3, 2, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Anguirus-14',
    steps: [2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Freivald Lament',
    steps: [1, 3, 3, 4, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Freivald-11',
    steps: [3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Freivald-13',
    steps: [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    aliases: ['Diatonicized Chromatic']
  },
  {
    edo: 24,
    name: 'Godzilla-5',
    steps: [4, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 24,
    name: 'Godzilla-9',
    steps: [4, 4, 1, 4, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Godzilla-14',
    steps: [3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Hemiaug-12',
    steps: [5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Migration-10',
    steps: [1, 3, 3, 1, 3, 3, 1, 3, 3, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Progressive Enneatonic',
    steps: [1, 2, 3, 4, 4, 1, 2, 3, 4],
    aliases: []
  },
  {
    edo: 24,
    name: 'Semaphore-14',
    steps: [1, 3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 24,
    name: 'Supermavila-7',
    steps: [2, 7, 2, 2, 7, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Triforce-9',
    steps: [3, 3, 2, 3, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Triforce-15',
    steps: [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Decimal-6',
    steps: [5, 5, 2, 5, 5, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Young Decatonic',
    steps: [2, 3, 2, 3, 2, 2, 3, 2, 3, 2],
    aliases: ['Decimal-10']
  },
  {
    edo: 24,
    name: 'Young Half-Octave Diatonic',
    steps: [2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1],
    aliases: ['Decimal-14']
  },
  {
    edo: 24,
    name: 'Breed Decatonic',
    steps: [3, 1, 3, 3, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Neutral Hypolydian Decatonic',
    steps: [1, 3, 3, 1, 3, 3, 3, 1, 3, 3],
    aliases: ['Mohajira-10']
  },
  {
    edo: 24,
    name: 'Neutral Dorian Decatonic',
    steps: [3, 1, 3, 3, 1, 3, 3, 3, 1, 3],
    aliases: ['Maqamic-10']
  },
  {
    edo: 24,
    name: 'Oljare Decatonic',
    steps: [2, 3, 2, 2, 3, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Ice Bookshop',
    steps: [2, 2, 2, 1, 3, 2, 2, 2, 2, 2, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Iceface',
    steps: [3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Iceface Maqam',
    steps: [3, 1, 2, 1, 3, 3, 1, 3, 1, 2, 1, 3],
    aliases: []
  },
  {
    edo: 24,
    name: 'Iceface Straub Variant',
    steps: [1, 3, 2, 2, 2, 1, 3, 2, 2, 3, 1, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Louvier Prelude et Fugue 3',
    steps: [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7],
    aliases: []
  },
  {
    edo: 24,
    name: 'Vaisvil\'s Mixed-Quarters',
    steps: [1, 3, 2, 1, 3, 1, 3, 2, 1, 2, 3, 2],
    aliases: []
  },
  {
    edo: 24,
    name: 'Agmon Diatonic DS5',
    steps: [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    aliases: ['Wyschnegradsky Diatonicized Chromatic']
  },
  {
    edo: 25,
    name: 'Twenty-five tone "Major"',
    steps: [4, 4, 2, 5, 4, 4, 2],
    aliases: []
  },
  {
    edo: 25,
    name: 'Twenty-five tone "Minor"',
    steps: [4, 2, 4, 5, 2, 4, 4],
    aliases: []
  },
  {
    edo: 25,
    name: 'Archytas Clan-10',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 25,
    name: 'Antiphrygian',
    steps: [5, 3, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Antimixolydian',
    steps: [3, 3, 5, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Antilocrian',
    steps: [5, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Antiionian',
    steps: [3, 3, 5, 3, 3, 3, 5],
    aliases: []
  },
  {
    edo: 25,
    name: 'Superdorian',
    steps: [3, 2, 3, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Superphrygian',
    steps: [2, 3, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Superlydian',
    steps: [3, 3, 3, 3, 2, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 25,
    name: 'Supermixolydian',
    steps: [3, 3, 3, 2, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Superolympian',
    steps: [3, 3, 2, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Superlocrian',
    steps: [2, 3, 3, 3, 2, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Armodue-7',
    steps: [3, 5, 3, 3, 3, 5, 3],
    aliases: ['Antidorian']
  },
  {
    edo: 25,
    name: 'Armodue-9',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 2],
    aliases: ['Superionian']
  },
  {
    edo: 25,
    name: 'Blackwood-10',
    steps: [2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Blackwood-15',
    steps: [2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 25,
    name: 'Dicot-7',
    steps: [3, 4, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 25,
    name: 'Hemithirds-6',
    steps: [4, 4, 4, 4, 4, 5],
    aliases: ['Spell-6']
  },
  {
    edo: 25,
    name: 'Hemithirds-7',
    steps: [4, 4, 4, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 25,
    name: 'Hemithirds-13',
    steps: [3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
    aliases: ['Spell-13']
  },
  {
    edo: 25,
    name: 'Mabila-9',
    steps: [3, 3, 2, 3, 3, 3, 3, 2, 3],
    aliases: ['Supercorinthian']
  },
  {
    edo: 25,
    name: 'Magic-7',
    steps: [7, 1, 7, 1, 1, 7, 1],
    aliases: []
  },
  {
    edo: 25,
    name: 'Magic-10',
    steps: [6, 1, 1, 1, 6, 1, 1, 6, 1, 1],
    aliases: []
  },
  {
    edo: 25,
    name: 'Magic-13',
    steps: [5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 25,
    name: 'Mavila-5',
    steps: [8, 3, 3, 8, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Mavila-7',
    steps: [3, 5, 3, 3, 5, 3, 3],
    aliases: ['Antiaeolian']
  },
  {
    edo: 25,
    name: 'Mavila-9',
    steps: [3, 2, 3, 3, 3, 2, 3, 3, 3],
    aliases: ['Superaeolian']
  },
  {
    edo: 25,
    name: 'Mohavila-11',
    steps: [3, 1, 3, 1, 3, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Pelogic-5',
    steps: [3, 3, 8, 3, 8],
    aliases: []
  },
  {
    edo: 25,
    name: 'Pelogic-7',
    steps: [3, 3, 3, 5, 3, 3, 5],
    aliases: ['Antilydian']
  },
  {
    edo: 25,
    name: 'Sixix-7',
    steps: [4, 4, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 25,
    name: 'Tritonic Diatonic',
    steps: [1, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 25,
    name: 'Ketradektriatoh',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Meantone Chromatic (4/9-comma)',
    steps: [1, 3, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Twenty-six tone Major',
    steps: [4, 4, 3, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Twenty-six tone Natural Minor',
    steps: [4, 3, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 26,
    name: 'Twenty-six tone Melodic Minor',
    steps: [4, 3, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Twenty-six tone Harmonic Minor',
    steps: [4, 3, 4, 4, 3, 5, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Twenty-six tone Harmonic Major',
    steps: [4, 4, 3, 4, 3, 5, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Quasi-equal Pentatonic',
    steps: [5, 5, 6, 5, 5],
    aliases: ['Mothra-5']
  },
  {
    edo: 26,
    name: 'Bleu-9',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 2],
    aliases: ['Jerome-9']
  },
  {
    edo: 26,
    name: 'Decibel-6',
    steps: [3, 5, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 26,
    name: 'Decibel-10',
    steps: [2, 3, 2, 3, 3, 2, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Doublewide-10',
    steps: [1, 5, 1, 5, 1, 1, 5, 1, 5, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Doublewide-14',
    steps: [1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Flattone-12',
    steps: [1, 3, 3, 1, 3, 1, 3, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Injera-12',
    steps: [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Lemba-6',
    steps: [5, 3, 5, 5, 3, 5],
    aliases: []
  },
  {
    edo: 26,
    name: 'Lemba-10',
    steps: [3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Mothra-6',
    steps: [5, 5, 5, 5, 5, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Mothra-11',
    steps: [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Orgone-7',
    steps: [2, 5, 5, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 26,
    name: 'Orgone-11',
    steps: [2, 2, 3, 2, 3, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 26,
    name: 'Orgone-15',
    steps: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Secant-14',
    steps: [3, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Spartan-11',
    steps: [4, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Superkleismic-7',
    steps: [5, 2, 5, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 26,
    name: 'Superkleismic-11',
    steps: [2, 3, 2, 3, 2, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 26,
    name: 'Superkleismic-15',
    steps: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 26,
    name: 'Erlich Double Diatonic',
    steps: [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    aliases: ['Injera-14']
  },
  {
    edo: 26,
    name: 'Static Major',
    steps: [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 26,
    name: 'Dynamic Major',
    steps: [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 26,
    name: 'Static Minor',
    steps: [2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 26,
    name: 'Dynamic Minor',
    steps: [2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 26,
    name: 'Injera',
    steps: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Twelve-tone Chromatic (4/9-comma positive)',
    steps: [4, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Twenty-seven tone "Major"',
    steps: [5, 4, 2, 5, 4, 5, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Twenty-seven tone "Minor"',
    steps: [5, 2, 4, 5, 2, 5, 4],
    aliases: []
  },
  {
    edo: 27,
    name: 'Septimal Minor Pentatonic',
    steps: [6, 5, 5, 6, 5],
    aliases: ['Supra-5']
  },
  {
    edo: 27,
    name: 'Augene-6',
    steps: [7, 2, 7, 2, 7, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Augene-9',
    steps: [2, 5, 2, 2, 5, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Augene-12',
    steps: [2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Augene-15',
    steps: [2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Beatles-7',
    steps: [5, 3, 3, 5, 3, 5, 3],
    aliases: ['Dichotic-7']
  },
  {
    edo: 27,
    name: 'Beatles-10',
    steps: [2, 3, 3, 3, 2, 3, 3, 2, 3, 3],
    aliases: ['Dichotic-10']
  },
  {
    edo: 27,
    name: 'Kumonga-11',
    steps: [2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 27,
    name: 'Myna-7',
    steps: [6, 1, 6, 1, 6, 1, 6],
    aliases: []
  },
  {
    edo: 27,
    name: 'Myna-11',
    steps: [1, 5, 1, 1, 5, 1, 5, 1, 1, 5, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Myna-15',
    steps: [1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Octacot-14',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Oodako-9',
    steps: [4, 4, 1, 4, 4, 1, 4, 4, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Sensi-8',
    steps: [3, 3, 4, 3, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 27,
    name: 'Sensi-11',
    steps: [3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Starling-12',
    steps: [2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 27,
    name: 'Superpyth-12',
    steps: [1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 27,
    name: 'Supra-7',
    steps: [5, 1, 5, 5, 5, 1, 5],
    aliases: []
  },
  {
    edo: 27,
    name: 'Supra-12',
    steps: [1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 27,
    name: 'Tetracot-7',
    steps: [4, 4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 27,
    name: 'Tetracot-13',
    steps: [1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 27,
    name: 'Quasi-equal Hexatonic',
    steps: [5, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 27,
    name: 'Miller\'s Galticeran',
    steps: [3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Twelve-tone Chromatic',
    steps: [2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Octatonic',
    steps: [2, 5, 2, 5, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 28,
    name: 'Diminished',
    steps: [5, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Quasi-equal Octatonic',
    steps: [3, 4, 3, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 28,
    name: 'Onyxwood',
    steps: [4, 2, 4, 1, 4, 2, 4, 1, 4, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Antikythera-6',
    steps: [5, 4, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 28,
    name: 'Antikythera-10',
    steps: [4, 1, 4, 4, 1, 4, 1, 4, 4, 1],
    aliases: []
  },
  {
    edo: 28,
    name: 'Demolished-12',
    steps: [2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Laquadgu-13',
    steps: [4, 1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1],
    aliases: []
  },
  {
    edo: 28,
    name: 'Machine-6',
    steps: [5, 5, 3, 5, 5, 5],
    aliases: []
  },
  {
    edo: 28,
    name: 'Machine-11',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Negri-9',
    steps: [3, 3, 3, 3, 4, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Negri-10',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 28,
    name: 'Octokaidecal-8',
    steps: [3, 3, 5, 3, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Octokaidecal-10',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Supersharp-8',
    steps: [3, 3, 5, 3, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Supersharp-10',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Thuja-11',
    steps: [5, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Thuja-13',
    steps: [3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 28,
    name: 'Thuja-15',
    steps: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
    aliases: ['Diatonicized Chromatic', 'Agmon Diatonic DS6 inverse']
  },
  {
    edo: 28,
    name: 'Whitewood-14',
    steps: [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 28,
    name: 'Agmon Diatonic DS6',
    steps: [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twelve-tone Chromatic (1/14-comma positive)',
    steps: [3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Major',
    steps: [5, 5, 2, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Minor',
    steps: [5, 2, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone "Just" Major',
    steps: [5, 4, 3, 5, 4, 5, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone "Just" Minor',
    steps: [5, 3, 4, 5, 3, 4, 5],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Natural Minor',
    steps: [5, 3, 4, 5, 3, 5, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Melodic Minor',
    steps: [5, 3, 4, 5, 4, 5, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Harmonic Minor',
    steps: [5, 3, 4, 5, 3, 6, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Twenty-nine tone Harmonic Major',
    steps: [5, 4, 3, 5, 3, 6, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Belauensis-14',
    steps: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Belauensis-15',
    steps: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Immunity-5',
    steps: [5, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 29,
    name: 'Immunity-9',
    steps: [5, 5, 1, 5, 1, 5, 1, 5, 1],
    aliases: []
  },
  {
    edo: 29,
    name: 'Immunity-14',
    steps: [1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Isopelogic-9',
    steps: [4, 3, 3, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Isopelogic-11',
    steps: [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Keenan Decatonic',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Nautilus-14',
    steps: [2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Negri-9',
    steps: [3, 3, 3, 3, 5, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Negri-10',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porcupine-7',
    steps: [4, 4, 4, 5, 4, 4, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porcupine-7 Major',
    steps: [4, 5, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porcupine-8',
    steps: [4, 4, 4, 4, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 29,
    name: 'Jones\'s Porcupine-8',
    steps: [4, 4, 1, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porky-7',
    steps: [5, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porky-8',
    steps: [4, 1, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 29,
    name: 'Porky-15',
    steps: [1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Schismic-12',
    steps: [2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 29,
    name: 'Quasi-equal Pentatonic',
    steps: [6, 6, 5, 6, 6],
    aliases: ['Semaphore-5']
  },
  {
    edo: 29,
    name: 'Semaphore-9',
    steps: [5, 1, 5, 1, 5, 1, 5, 1, 5],
    aliases: []
  },
  {
    edo: 29,
    name: 'Semaphore-14',
    steps: [1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4, 1],
    aliases: []
  },
  {
    edo: 29,
    name: 'Sephiroth-7',
    steps: [2, 2, 7, 2, 7, 2, 7],
    aliases: []
  },
  {
    edo: 29,
    name: 'Sephiroth-10',
    steps: [2, 2, 2, 5, 2, 2, 5, 2, 2, 5],
    aliases: []
  },
  {
    edo: 29,
    name: 'Sephiroth-13',
    steps: [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 29,
    name: 'Tridec-8',
    steps: [4, 3, 4, 3, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 30,
    name: 'Thirty tone "Major"',
    steps: [5, 5, 2, 6, 5, 5, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Thirty tone "Minor"',
    steps: [5, 2, 5, 6, 2, 5, 5],
    aliases: []
  },
  {
    edo: 30,
    name: 'Madenda: Sunda',
    steps: [10, 3, 10, 5, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Amiot\'s Scale',
    steps: [6, 1, 6, 4, 6, 1, 6],
    aliases: []
  },
  {
    edo: 30,
    name: 'Balzano Eleven-tone',
    steps: [3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Balzano Eleven-tone inverse',
    steps: [2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 30,
    name: 'Equal temperaments 5 and 6 mixed',
    steps: [5, 1, 4, 2, 3, 3, 2, 4, 1, 5],
    aliases: []
  },
  {
    edo: 30,
    name: 'Bipelog-14',
    steps: [2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Deflated-9',
    steps: [3, 4, 3, 3, 4, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 30,
    name: 'Hexe-12',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Lovecraft-5',
    steps: [7, 7, 7, 7, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Lovecraft-9',
    steps: [5, 2, 5, 2, 5, 2, 5, 2, 2],
    aliases: []
  },
  {
    edo: 30,
    name: 'Lovecraft-13',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 2],
    aliases: ['Ragimetric-13']
  },
  {
    edo: 30,
    name: 'Mavila-5',
    steps: [9, 4, 4, 9, 4],
    aliases: []
  },
  {
    edo: 30,
    name: 'Mavila-7',
    steps: [4, 5, 4, 4, 5, 4, 4],
    aliases: ['Antiaeolian']
  },
  {
    edo: 30,
    name: 'Mavila-9',
    steps: [4, 1, 4, 4, 4, 1, 4, 4, 4],
    aliases: []
  },
  {
    edo: 30,
    name: 'Mechanism-5',
    steps: [3, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 30,
    name: 'Mechanism-8',
    steps: [3, 3, 5, 3, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 30,
    name: 'Mechanism-11',
    steps: [3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 30,
    name: 'Pelogic-7',
    steps: [4, 4, 4, 5, 4, 4, 5],
    aliases: ['Antilydian']
  },
  {
    edo: 30,
    name: 'Stacks-11',
    steps: [3, 2, 3, 3, 3, 2, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Meantone Chromatic (53/220-comma)',
    steps: [2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Thirty-one tone Major',
    steps: [5, 5, 3, 5, 5, 5, 3],
    aliases: ['Intense Diatonic Lydian', 'M.Ionian']
  },
  {
    edo: 31,
    name: 'Thirty-one tone Natural Minor',
    steps: [5, 3, 5, 5, 3, 5, 5],
    aliases: ['Intense Diatonic Hypodorian', 'Aeolian']
  },
  {
    edo: 31,
    name: 'Thirty-one tone Melodic Minor',
    steps: [5, 3, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Thirty-one tone Harmonic Minor',
    steps: [5, 3, 5, 5, 3, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Thirty-one tone Harmonic Major',
    steps: [5, 5, 3, 5, 3, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Thirty-one tone Major-Minor',
    steps: [5, 5, 3, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus primum',
    steps: [5, 8, 5, 13],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus secundum',
    steps: [10, 3, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus tertium',
    steps: [8, 2, 8, 3, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus quartum',
    steps: [10, 10, 10, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus quintum',
    steps: [5, 7, 6, 7, 5, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus sextum',
    steps: [4, 6, 2, 6, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus septimum',
    steps: [4, 6, 5, 6, 4, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus octavum',
    steps: [6, 6, 6, 1, 6, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus nonum',
    steps: [4, 6, 9, 6, 4, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus decimum',
    steps: [13, 6, 6, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus diatonicum',
    steps: [5, 5, 3, 5, 5, 3, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus chromaticum',
    steps: [3, 5, 2, 3, 5, 3, 2, 5, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus diatonicum cum septimis',
    steps: [5, 5, 2, 1, 5, 5, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus enharmonicum vocale',
    steps: [3, 4, 3, 3, 2, 1, 4, 1, 4, 1, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus enharmonicum instrumentale',
    steps: [2, 2, 4, 2, 2, 3, 3, 3, 1, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus diatonico-chromaticum',
    steps: [3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Genus bichromaticum',
    steps: [5, 2, 1, 2, 5, 3, 2, 1, 4, 1, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hexy',
    steps: [2, 3, 2, 3, 3, 2, 3, 3, 2, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Major Wing',
    steps: [2, 3, 3, 2, 3, 5, 2, 1, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Minor Wing',
    steps: [5, 3, 2, 3, 3, 2, 3, 2, 3, 2, 1, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Dekatesserany',
    steps: [2, 1, 1, 1, 5, 2, 5, 1, 1, 1, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Septimal Minor Pentatonic',
    steps: [7, 6, 5, 7, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Septimal Slendro',
    steps: [5, 6, 7, 6, 7],
    aliases: []
  },
  {
    edo: 31,
    name: 'Harmonic Dominant Pentatonic',
    steps: [5, 5, 8, 7, 6],
    aliases: ['Wagogo: Tanzania']
  },
  {
    edo: 31,
    name: 'Septimal Diatonic',
    steps: [6, 4, 3, 5, 5, 2, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neapolitan Minor',
    steps: [3, 5, 5, 5, 3, 7, 3],
    aliases: ['Hungarian Gipsy']
  },
  {
    edo: 31,
    name: 'Double Harmonic Major',
    steps: [3, 7, 3, 5, 3, 7, 3],
    aliases: ['Major Gipsy']
  },
  {
    edo: 31,
    name: 'Minor Gipsy',
    steps: [5, 3, 7, 3, 3, 5, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Harmonic Minor',
    steps: [5, 3, 7, 3, 3, 7, 3],
    aliases: ['Hungarian Minor']
  },
  {
    edo: 31,
    name: 'Harmonic Major sharp 5',
    steps: [5, 5, 3, 7, 1, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Fokker 12-tone',
    steps: [3, 2, 2, 3, 3, 2, 3, 3, 2, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Fokker Six-star A',
    steps: [3, 5, 3, 2, 5, 3, 8, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Fokker Six-star B',
    steps: [5, 1, 5, 4, 6, 4, 2, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Fokker Six-star C',
    steps: [6, 1, 6, 6, 1, 5, 1, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Diminished',
    steps: [5, 3, 5, 3, 5, 2, 5, 3],
    aliases: ['Modus conjunctus']
  },
  {
    edo: 31,
    name: 'Octatonic',
    steps: [3, 5, 2, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Major/Minor mixed',
    steps: [5, 3, 2, 3, 5, 3, 2, 3, 2, 3],
    aliases: ['Supermode']
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Mixolydian',
    steps: [4, 4, 5, 4, 4, 5, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Lydian',
    steps: [4, 5, 4, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Phrygian',
    steps: [5, 4, 4, 5, 5, 4, 4],
    aliases: ['Rast']
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Dorian',
    steps: [4, 4, 5, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Hypolydian',
    steps: [4, 5, 5, 4, 4, 5, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Hypophrygian',
    steps: [5, 5, 4, 4, 5, 4, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Diatonic Hypodorian',
    steps: [5, 4, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Mixolydian',
    steps: [4, 5, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Lydian',
    steps: [5, 4, 4, 5, 4, 5, 4],
    aliases: ['Dicot-7']
  },
  {
    edo: 31,
    name: 'Neutral Phrygian',
    steps: [4, 4, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Dorian',
    steps: [4, 5, 4, 5, 4, 5, 4],
    aliases: ['Maqamic-7']
  },
  {
    edo: 31,
    name: 'Neutral Hypolydian',
    steps: [5, 4, 5, 4, 5, 4, 4],
    aliases: ['Mohajira-7']
  },
  {
    edo: 31,
    name: 'Neutral Hypophrygian',
    steps: [4, 5, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Neutral Hypodorian',
    steps: [5, 4, 5, 4, 4, 5, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Mixolydian',
    steps: [2, 2, 9, 2, 2, 9, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Lydian',
    steps: [2, 9, 2, 2, 9, 5, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Phrygian',
    steps: [9, 2, 2, 9, 5, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Dorian',
    steps: [2, 2, 9, 5, 2, 2, 9],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Hypolydian',
    steps: [2, 9, 5, 2, 2, 9, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Hypophrygian',
    steps: [9, 5, 2, 2, 9, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemiolic Chromatic Hypodorian',
    steps: [5, 2, 2, 9, 2, 2, 9],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Mixolydian',
    steps: [2, 3, 8, 2, 3, 8, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Lydian',
    steps: [3, 8, 2, 3, 8, 5, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Phrygian',
    steps: [8, 2, 3, 8, 5, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Dorian',
    steps: [2, 3, 8, 5, 2, 3, 8],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Hypolydian',
    steps: [3, 8, 5, 2, 3, 8, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Hypophrygian',
    steps: [8, 5, 2, 3, 8, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Ratio 2:3 Chromatic Hypodorian',
    steps: [5, 2, 3, 8, 2, 3, 8],
    aliases: []
  },
  {
    edo: 31,
    name: 'Intense Diatonic Mixolydian',
    steps: [3, 5, 5, 3, 5, 5, 5],
    aliases: ['M.Locrian']
  },
  {
    edo: 31,
    name: 'Intense Diatonic Phrygian',
    steps: [5, 3, 5, 5, 5, 3, 5],
    aliases: ['M.Dorian']
  },
  {
    edo: 31,
    name: 'Intense Diatonic Dorian',
    steps: [3, 5, 5, 5, 3, 5, 5],
    aliases: ['M.Phrygian']
  },
  {
    edo: 31,
    name: 'Intense Diatonic Hypolydian',
    steps: [5, 5, 5, 3, 5, 5, 3],
    aliases: ['M.Lydian']
  },
  {
    edo: 31,
    name: 'Intense Diatonic Hypophrygian',
    steps: [5, 5, 3, 5, 5, 3, 5],
    aliases: ['M.Mixolydian']
  },
  {
    edo: 31,
    name: 'Soft Diatonic Mixolydian',
    steps: [2, 5, 6, 2, 5, 6, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Lydian',
    steps: [5, 6, 2, 5, 6, 5, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Phrygian',
    steps: [6, 2, 5, 6, 5, 2, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Dorian',
    steps: [2, 5, 6, 5, 2, 5, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Hypolydian',
    steps: [5, 6, 5, 2, 5, 6, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Hypophrygian',
    steps: [6, 5, 2, 5, 6, 2, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Soft Diatonic Hypodorian',
    steps: [5, 2, 5, 6, 2, 5, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Mixolydian',
    steps: [1, 2, 10, 1, 2, 10, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Lydian',
    steps: [2, 10, 1, 2, 10, 5, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Phrygian',
    steps: [10, 1, 2, 10, 5, 1, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Dorian',
    steps: [1, 2, 10, 5, 1, 2, 10],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Hypolydian',
    steps: [2, 10, 5, 1, 2, 10, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Hypophrygian',
    steps: [10, 5, 1, 2, 10, 1, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Enharmonic Hypodorian',
    steps: [5, 1, 2, 10, 1, 2, 10],
    aliases: []
  },
  {
    edo: 31,
    name: 'Quasi-equal Pentatonic',
    steps: [6, 6, 7, 6, 6],
    aliases: ['Mothra-5']
  },
  {
    edo: 31,
    name: 'Slendro A1',
    steps: [6, 7, 5, 7, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Slendro M',
    steps: [6, 7, 5, 6, 7],
    aliases: []
  },
  {
    edo: 31,
    name: 'Slendro S1',
    steps: [6, 7, 6, 6, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'The Gray Picture of Dorian',
    steps: [3, 7, 5, 1, 5, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tetrachordal 6-2-5',
    steps: [6, 2, 5, 5, 6, 2, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tetrachordal 6-6-1',
    steps: [6, 6, 1, 5, 6, 6, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tetrachordal 7-2-4',
    steps: [7, 2, 4, 5, 7, 2, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tetrachordal 8-2-3',
    steps: [8, 2, 3, 5, 8, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tetrachordal 9-2-2',
    steps: [9, 2, 2, 5, 9, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hahn Trichordal',
    steps: [4, 3, 3, 5, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hahn Symmetrical Pentachordal',
    steps: [3, 3, 4, 3, 5, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hahn Pentachordal',
    steps: [3, 4, 3, 3, 5, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hahn Nonatonic',
    steps: [4, 4, 2, 5, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Breed Decatonic',
    steps: [4, 1, 4, 4, 4, 1, 4, 4, 1, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Lumma Decatonic',
    steps: [4, 2, 4, 2, 4, 2, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hexany Flanker',
    steps: [1, 5, 1, 3, 3, 3, 1, 5, 1, 2, 4, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Secor 12-tone',
    steps: [1, 4, 2, 3, 2, 2, 4, 2, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'de Vries 11-tone',
    steps: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1],
    aliases: ['Mothra-11']
  },
  {
    edo: 31,
    name: 'Neutral Hypolydian Decatonic',
    steps: [1, 4, 4, 1, 4, 4, 4, 1, 4, 4],
    aliases: ['Mohajira-10']
  },
  {
    edo: 31,
    name: 'Neutral Dorian Decatonic',
    steps: [4, 1, 4, 4, 1, 4, 4, 4, 1, 4],
    aliases: ['Maqamic-10']
  },
  {
    edo: 31,
    name: 'Rothenberg Generalized Diatonic',
    steps: [5, 3, 3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Thompson Nine out of 31',
    steps: [7, 2, 4, 5, 4, 1, 1, 2, 5],
    aliases: []
  },
  {
    edo: 31,
    name: '"Septimal" Natural Minor',
    steps: [5, 2, 6, 5, 2, 5, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Ionian',
    steps: [4, 1, 4, 1, 2, 1, 4, 1, 4, 1, 4, 1, 2, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Dorian',
    steps: [4, 1, 2, 1, 4, 1, 4, 1, 4, 1, 2, 1, 4, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Phrygian',
    steps: [2, 1, 4, 1, 4, 1, 4, 1, 2, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Lydian',
    steps: [4, 1, 4, 1, 4, 1, 2, 1, 4, 1, 4, 1, 2, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Mixolydian',
    steps: [4, 1, 4, 1, 2, 1, 4, 1, 4, 1, 2, 1, 4, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Aeolian',
    steps: [4, 1, 2, 1, 4, 1, 4, 1, 2, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Double Locrian',
    steps: [2, 1, 4, 1, 4, 1, 2, 1, 4, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Dark Minor',
    steps: [3, 3, 2, 3, 3, 4, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Alternate Minor',
    steps: [3, 2, 3, 3, 4, 3, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Bright Minor',
    steps: [2, 3, 3, 4, 3, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Standard Minor',
    steps: [3, 3, 3, 4, 3, 3, 2, 3, 3, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Dark Major',
    steps: [3, 3, 4, 3, 3, 2, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Alternate Major',
    steps: [3, 4, 3, 3, 2, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Bright Major',
    steps: [4, 3, 3, 2, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Standard Major',
    steps: [3, 3, 4, 3, 3, 3, 4, 3, 3, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Dark Augmented',
    steps: [3, 4, 3, 3, 3, 4, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Bright Augmented',
    steps: [4, 3, 3, 3, 4, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Naga',
    steps: [5, 5, 3, 1, 4, 5, 4, 1, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Duohex',
    steps: [3, 2, 3, 2, 1, 5, 2, 3, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Heathwaite\'s Meteoroid',
    steps: [2, 3, 2, 4, 2, 3, 2, 2, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Nested Bees',
    steps: [1, 7, 1, 2, 1, 7, 1, 2, 1, 7, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Strange Diatonic',
    steps: [3, 7, 1, 7, 3, 5, 5],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tancuva',
    steps: [3, 1, 3, 1, 5, 1, 3, 1, 3, 1, 5, 1, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Apparatus-10',
    steps: [3, 3, 3, 3, 3, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Apparatus-11',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Greeley-8',
    steps: [3, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Greeley-15',
    steps: [3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Hemithirds-6',
    steps: [5, 5, 5, 5, 5, 6],
    aliases: ['Roulette-6']
  },
  {
    edo: 31,
    name: 'Hemithirds-7',
    steps: [5, 5, 5, 5, 5, 5, 1],
    aliases: ['Roulette-7']
  },
  {
    edo: 31,
    name: 'Hemithirds-13',
    steps: [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1],
    aliases: ['Roulette-13']
  },
  {
    edo: 31,
    name: 'Joan-7',
    steps: [8, 3, 3, 8, 3, 3, 3],
    aliases: ['Score-7']
  },
  {
    edo: 31,
    name: 'Joan-9',
    steps: [5, 3, 3, 3, 5, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Joan-11',
    steps: [2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3],
    aliases: ['Score-11']
  },
  {
    edo: 31,
    name: 'Marvel-9',
    steps: [3, 4, 3, 3, 5, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Marvel-12',
    steps: [3, 2, 3, 2, 3, 2, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Migration-10',
    steps: [1, 4, 4, 1, 4, 4, 1, 4, 4, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Miracle-10',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 31,
    name: 'Miracle-12',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Mothra-6',
    steps: [6, 6, 6, 6, 6, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Myna-7',
    steps: [7, 1, 7, 1, 7, 1, 7],
    aliases: []
  },
  {
    edo: 31,
    name: 'Myna-11',
    steps: [1, 6, 1, 1, 6, 1, 6, 1, 1, 6, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Myna-15',
    steps: [1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Orwell-5',
    steps: [7, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Orwell-9',
    steps: [4, 3, 4, 3, 4, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Orwell-13',
    steps: [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Polyhymnia-12',
    steps: [4, 1, 4, 1, 4, 3, 1, 4, 1, 4, 1, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Score-9',
    steps: [3, 5, 3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 31,
    name: 'Sentinel-8',
    steps: [2, 7, 2, 7, 2, 2, 7, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Secor Sentinel-11',
    steps: [2, 5, 2, 2, 5, 2, 2, 2, 5, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Sentinel-14',
    steps: [2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Semisept-13',
    steps: [3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Slendric-5',
    steps: [6, 6, 6, 7, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Slendric-6',
    steps: [6, 6, 6, 6, 1, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Slendric-11',
    steps: [5, 1, 5, 1, 5, 1, 5, 1, 1, 5, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Squares-11',
    steps: [5, 2, 2, 5, 2, 2, 2, 5, 2, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Squares-14',
    steps: [3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Starling-12',
    steps: [2, 4, 2, 2, 3, 3, 2, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 31,
    name: 'Tertiaseptal-15',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: ['Valentine-15']
  },
  {
    edo: 31,
    name: 'Wonder-5',
    steps: [7, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 31,
    name: 'Wonder-11',
    steps: [5, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1],
    aliases: []
  },
  {
    edo: 31,
    name: 'Wurschmidt-13',
    steps: [7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 32,
    name: 'Thirty-two tone "Major"',
    steps: [6, 4, 3, 6, 4, 6, 3],
    aliases: []
  },
  {
    edo: 32,
    name: 'Thirty-two tone "Minor"',
    steps: [6, 3, 4, 6, 3, 6, 4],
    aliases: []
  },
  {
    edo: 32,
    name: 'Septimal Minor Pentatonic',
    steps: [7, 6, 6, 7, 6],
    aliases: []
  },
  {
    edo: 32,
    name: 'Octatonic',
    steps: [3, 5, 3, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 32,
    name: 'Diminished',
    steps: [5, 3, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 32,
    name: 'Pentachordal Decatonic',
    steps: [4, 3, 3, 3, 4, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 32,
    name: 'Dicot-7',
    steps: [4, 5, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 32,
    name: 'Diminished-12',
    steps: [3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 32,
    name: 'Glacial-7',
    steps: [5, 5, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 32,
    name: 'Glacial-13',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 32,
    name: 'Kangaroo-13',
    steps: [5, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 32,
    name: 'Mohavila-11',
    steps: [4, 1, 4, 1, 4, 4, 1, 4, 4, 1, 4],
    aliases: []
  },
  {
    edo: 32,
    name: 'Pajaro-12',
    steps: [3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 32,
    name: 'Progress-15',
    steps: [2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 32,
    name: 'Sixix-7',
    steps: [5, 5, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 32,
    name: 'Superpelog-9',
    steps: [3, 4, 3, 4, 3, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 32,
    name: 'Superpelog-14',
    steps: [3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 33,
    name: 'Meantone Chromatic (1/2-comma)',
    steps: [1, 4, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4],
    aliases: []
  },
  {
    edo: 33,
    name: 'August-9',
    steps: [5, 3, 3, 5, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'August-12',
    steps: [2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'Bluebirds-7',
    steps: [5, 5, 5, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 33,
    name: 'Bluebirds-13',
    steps: [2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'Dichosis-7',
    steps: [3, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'Dichosis-10',
    steps: [3, 4, 3, 3, 3, 4, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'Dichosis-13',
    steps: [3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 33,
    name: 'Godzilla-5',
    steps: [5, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 33,
    name: 'Godzilla-9',
    steps: [5, 5, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 33,
    name: 'Godzilla-14',
    steps: [3, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 33,
    name: 'Inflated-12',
    steps: [5, 2, 2, 2, 5, 2, 2, 2, 5, 2, 2, 2],
    aliases: []
  },
  {
    edo: 33,
    name: 'Inflated-15',
    steps: [2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2],
    aliases: []
  },
  {
    edo: 33,
    name: 'Laquadgu-13',
    steps: [5, 1, 5, 1, 1, 5, 1, 5, 1, 1, 5, 1, 1],
    aliases: []
  },
  {
    edo: 33,
    name: 'Terrain-9',
    steps: [1, 5, 5, 1, 5, 5, 1, 5, 5],
    aliases: []
  },
  {
    edo: 33,
    name: 'Terrain-15',
    steps: [1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 33,
    name: 'Shallert\'s mode',
    steps: [5, 5, 1, 5, 5, 1, 5, 5, 1],
    aliases: ['Terrain-9 inverse']
  },
  {
    edo: 33,
    name: 'Slurpee-15',
    steps: [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 34,
    name: '"Just" Chromatic',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone "Just" Major',
    steps: [6, 5, 3, 6, 5, 6, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone "Just" Minor',
    steps: [6, 3, 5, 6, 3, 5, 6],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone Natural Minor',
    steps: [6, 3, 5, 6, 3, 6, 5],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone Melodic Minor',
    steps: [6, 3, 5, 6, 5, 6, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone Harmonic Minor',
    steps: [6, 3, 5, 6, 3, 8, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Thirty-four tone Harmonic Major',
    steps: [6, 5, 3, 6, 3, 8, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Genus chromaticum',
    steps: [3, 6, 2, 3, 6, 3, 2, 6, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Quasi-equal Pentatonic',
    steps: [7, 7, 6, 7, 7],
    aliases: []
  },
  {
    edo: 34,
    name: 'Anguirus-10',
    steps: [3, 3, 4, 3, 4, 3, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 34,
    name: 'Anguirus-14',
    steps: [3, 1, 3, 3, 1, 3, 3, 3, 1, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Decimal-6',
    steps: [7, 7, 3, 7, 7, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Decimal-10',
    steps: [3, 4, 3, 4, 3, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Decimal-14',
    steps: [3, 3, 1, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 34,
    name: 'Diaschismic-10',
    steps: [3, 3, 3, 5, 3, 3, 3, 3, 5, 3],
    aliases: ['Pajara-10']
  },
  {
    edo: 34,
    name: 'Diaschismic-12',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3],
    aliases: ['Pajara-12']
  },
  {
    edo: 34,
    name: 'Father-5',
    steps: [8, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 34,
    name: 'Father-8',
    steps: [5, 3, 5, 5, 3, 5, 5, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Immunity-5',
    steps: [6, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 34,
    name: 'Immunity-9',
    steps: [6, 6, 1, 6, 1, 6, 1, 6, 1],
    aliases: []
  },
  {
    edo: 34,
    name: 'Immunity-14',
    steps: [1, 1, 5, 1, 1, 5, 1, 5, 1, 1, 5, 1, 1, 5],
    aliases: []
  },
  {
    edo: 34,
    name: 'Jubilee-12',
    steps: [3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Kleismic-7',
    steps: [2, 7, 2, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 34,
    name: 'Kleismic-11',
    steps: [2, 2, 5, 2, 5, 2, 2, 5, 2, 2, 5],
    aliases: []
  },
  {
    edo: 34,
    name: 'Kleismic-15',
    steps: [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Mabila-7',
    steps: [4, 7, 4, 4, 4, 7, 4],
    aliases: []
  },
  {
    edo: 34,
    name: 'Mabila-9',
    steps: [4, 4, 3, 4, 4, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 34,
    name: 'Ripple-12',
    steps: [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 34,
    name: 'Starling-12',
    steps: [2, 5, 2, 2, 3, 4, 2, 3, 2, 4, 3, 2],
    aliases: []
  },
  {
    edo: 34,
    name: 'Tetracot-7',
    steps: [5, 5, 5, 5, 5, 5, 4],
    aliases: []
  },
  {
    edo: 34,
    name: 'Tetracot-13',
    steps: [1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 34,
    name: 'Vishnu-14',
    steps: [5, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 34,
    name: 'Wilson 11-tone',
    steps: [2, 5, 2, 5, 2, 2, 5, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 34,
    name: 'Wurschmidt-13',
    steps: [8, 1, 1, 1, 8, 1, 1, 1, 8, 1, 1, 1, 1],
    aliases: []
  },
  {
    edo: 34,
    name: 'Haverstick',
    steps: [4, 3, 1, 2, 3, 3, 2, 3, 3, 2, 4, 2, 2],
    aliases: []
  },
  {
    edo: 34,
    name: 'Pentachordal Decatonic',
    steps: [5, 3, 3, 3, 5, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 35,
    name: 'Blacksmith-10',
    steps: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 35,
    name: 'Blacksmith-15',
    steps: [3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 35,
    name: 'Bleu-9',
    steps: [4, 4, 4, 4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 35,
    name: 'Magic-7',
    steps: [9, 2, 9, 2, 2, 9, 2],
    aliases: []
  },
  {
    edo: 35,
    name: 'Magic-10',
    steps: [7, 2, 2, 2, 7, 2, 2, 7, 2, 2],
    aliases: []
  },
  {
    edo: 35,
    name: 'Magic-13',
    steps: [5, 2, 2, 2, 5, 2, 2, 2, 5, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 35,
    name: 'Muggles-13',
    steps: [2, 2, 5, 2, 2, 2, 5, 2, 2, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 35,
    name: 'Ripple-12',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 35,
    name: 'Septimal-14',
    steps: [3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 35,
    name: 'Twelve-35-12',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3],
    aliases: []
  },
  {
    edo: 35,
    name: 'Whitewood-14',
    steps: [1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Nam Hue: Vietnam',
    steps: [5, 10, 6, 5, 10],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Mixolydian',
    steps: [1, 1, 13, 1, 1, 13, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Lydian',
    steps: [1, 13, 1, 1, 13, 6, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Phrygian',
    steps: [13, 1, 1, 13, 6, 1, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Dorian',
    steps: [1, 1, 13, 6, 1, 1, 13],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Hypolydian',
    steps: [1, 13, 6, 1, 1, 13, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Hypophrygian',
    steps: [13, 6, 1, 1, 13, 1, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hyperenharmonic Hypodorian',
    steps: [6, 1, 1, 13, 1, 1, 13],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Mixolydian',
    steps: [2, 2, 11, 2, 2, 11, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Lydian',
    steps: [2, 11, 2, 2, 11, 6, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Phrygian',
    steps: [11, 2, 2, 11, 6, 2, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Dorian',
    steps: [2, 2, 11, 6, 2, 2, 11],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Hypolydian',
    steps: [2, 11, 6, 2, 2, 11, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Hypophrygian',
    steps: [11, 6, 2, 2, 11, 2, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Soft Chromatic Hypodorian',
    steps: [6, 2, 2, 11, 2, 2, 11],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Mixolydian',
    steps: [2, 4, 9, 2, 4, 9, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Lydian',
    steps: [4, 9, 2, 4, 9, 6, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Phrygian',
    steps: [9, 2, 4, 9, 6, 2, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Dorian',
    steps: [2, 4, 9, 6, 2, 4, 9],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Hypolydian',
    steps: [4, 9, 6, 2, 4, 9, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Hypophrygian',
    steps: [9, 6, 2, 4, 9, 2, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Ratio 1:2 Chromatic Hypodorian',
    steps: [6, 2, 4, 9, 2, 4, 9],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Mixolydian',
    steps: [5, 5, 5, 5, 5, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Lydian',
    steps: [5, 5, 5, 5, 5, 6, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Phrygian',
    steps: [5, 5, 5, 5, 6, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Dorian',
    steps: [5, 5, 5, 6, 5, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Hypolydian',
    steps: [5, 5, 6, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Hypophrygian',
    steps: [5, 6, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Equal Diatonic Hypodorian',
    steps: [6, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Mixolydian',
    steps: [2, 7, 6, 2, 7, 6, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Lydian',
    steps: [7, 6, 2, 7, 6, 6, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Phrygian',
    steps: [6, 2, 7, 6, 6, 2, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Dorian',
    steps: [2, 7, 6, 6, 2, 7, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Hypolydian',
    steps: [7, 6, 6, 2, 7, 6, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Hypophrygian',
    steps: [6, 6, 2, 7, 6, 2, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Diatonic + Soft Chromatic Diesis Hypodorian',
    steps: [6, 2, 7, 6, 2, 7, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Second authentic Byzantine Liturgical mode',
    steps: [4, 7, 4, 6, 4, 7, 4],
    aliases: ['Savas Soft Chromatic 2nd Byzantine mode']
  },
  {
    edo: 36,
    name: 'Savas Diatonic Byzantine Liturgical mode',
    steps: [4, 6, 5, 6, 4, 6, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Savas Enharmonic Byzantine Liturgical mode',
    steps: [4, 8, 3, 6, 4, 8, 3],
    aliases: []
  },
  {
    edo: 36,
    name: 'Second plagal Byzantine Liturgical mode',
    steps: [3, 10, 2, 6, 3, 10, 2],
    aliases: ['Hard Chromatic 2nd plagal Byzantine mode']
  },
  {
    edo: 36,
    name: 'First plagal Byzantine Liturgical mode ascending',
    steps: [5, 4, 6, 6, 5, 4, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'First plagal Byzantine Liturgical mode descending',
    steps: [5, 4, 6, 6, 3, 6, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Fourth authentic Byzantine Liturgical mode',
    steps: [4, 6, 6, 5, 4, 6, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Fourth plagal Byzantine Liturgical mode',
    steps: [6, 5, 4, 6, 6, 5, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Augment-6',
    steps: [5, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Augment-9',
    steps: [5, 2, 5, 5, 2, 5, 5, 2, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Augment-15',
    steps: [2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Echidnic-10',
    steps: [3, 4, 4, 3, 4, 3, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Golden-10',
    steps: [3, 5, 3, 3, 5, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 36,
    name: 'Golden-13',
    steps: [3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hedgehog-8',
    steps: [3, 5, 5, 5, 3, 5, 5, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Hedgehog-14',
    steps: [3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Lemba-6',
    steps: [7, 4, 7, 7, 4, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Lemba-10',
    steps: [4, 3, 4, 3, 4, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Liese-5',
    steps: [2, 15, 2, 2, 15],
    aliases: []
  },
  {
    edo: 36,
    name: 'Liese-7',
    steps: [2, 2, 13, 2, 2, 2, 13],
    aliases: []
  },
  {
    edo: 36,
    name: 'Liese-9',
    steps: [2, 2, 2, 11, 2, 2, 2, 2, 11],
    aliases: []
  },
  {
    edo: 36,
    name: 'Liese-11',
    steps: [2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 9],
    aliases: []
  },
  {
    edo: 36,
    name: 'Quasi-equal Pentatonic',
    steps: [7, 7, 8, 7, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Slendric-5',
    steps: [7, 7, 7, 8, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Slendric-6',
    steps: [7, 7, 7, 7, 1, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Slendric-11',
    steps: [6, 1, 6, 1, 6, 1, 6, 1, 1, 6, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Quasi-equal Hexatonic',
    steps: [7, 5, 7, 5, 7, 5],
    aliases: ['Ternary-6']
  },
  {
    edo: 36,
    name: 'Ternary-15',
    steps: [3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Urchin-14',
    steps: [3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 36,
    name: 'Wonder-5',
    steps: [8, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 36,
    name: 'Wonder-11',
    steps: [6, 1, 1, 6, 1, 6, 1, 6, 1, 6, 1],
    aliases: []
  },
  {
    edo: 36,
    name: 'Quasi-equal Octatonic',
    steps: [4, 5, 4, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Quasi-equal Diminished',
    steps: [5, 4, 5, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Bohlen 833 cents Golden scale',
    steps: [3, 4, 4, 3, 4, 4, 3, 3, 4, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Shur',
    steps: [4, 5, 6, 4, 2, 3, 1, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Abuata',
    steps: [4, 5, 6, 6, 3, 1, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Dashti',
    steps: [3, 1, 5, 6, 4, 2, 3, 1, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Bayat-e Tork',
    steps: [3, 3, 6, 3, 6, 6, 4, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Afshari',
    steps: [6, 4, 5, 6, 4, 2, 3, 1, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Segah',
    steps: [5, 6, 4, 5, 1, 5, 6, 4],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Chahargah',
    steps: [4, 8, 3, 6, 4, 8, 3],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Homayun',
    steps: [4, 8, 3, 6, 3, 1, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Bayat-e Esfahan',
    steps: [6, 3, 6, 6, 4, 6, 5],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Nava',
    steps: [6, 3, 6, 6, 4, 5, 6],
    aliases: []
  },
  {
    edo: 36,
    name: 'Dastgah-e Mahur',
    steps: [6, 6, 3, 6, 6, 3, 3, 3],
    aliases: ['Rast (Rast Panjgah)']
  },
  {
    edo: 37,
    name: 'Bossier-11',
    steps: [2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Bossier-14',
    steps: [2, 2, 2, 5, 2, 2, 2, 2, 5, 2, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Dichotic-7',
    steps: [7, 4, 4, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Dichotic-10',
    steps: [3, 4, 4, 4, 3, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Freivald-11',
    steps: [5, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 37,
    name: 'Freivald-13',
    steps: [2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 37,
    name: 'Gorgo-6',
    steps: [7, 7, 2, 7, 7, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Gorgo-Pelog',
    steps: [2, 7, 7, 5, 2, 7, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Gorgo-11',
    steps: [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Orgone-7',
    steps: [3, 7, 7, 3, 7, 3, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Orgone-11',
    steps: [3, 3, 4, 3, 4, 3, 3, 4, 3, 3, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Orgone-15',
    steps: [3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 37,
    name: 'Parizek-11',
    steps: [3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Parizek-13',
    steps: [3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Passion-12',
    steps: [3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 37,
    name: 'Porcupine-7',
    steps: [5, 5, 5, 7, 5, 5, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Porcupine-7 Major',
    steps: [5, 7, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Porcupine-8',
    steps: [5, 5, 5, 5, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Porcupine-15',
    steps: [3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Roulette-6',
    steps: [6, 6, 6, 6, 6, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Roulette-7',
    steps: [6, 6, 6, 6, 6, 6, 1],
    aliases: []
  },
  {
    edo: 37,
    name: 'Roulette-13',
    steps: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1],
    aliases: []
  },
  {
    edo: 37,
    name: 'Sharp-7',
    steps: [7, 4, 7, 4, 7, 4, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Sharp-10',
    steps: [3, 4, 4, 4, 3, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Silver-7',
    steps: [4, 7, 4, 7, 4, 4, 7],
    aliases: []
  },
  {
    edo: 37,
    name: 'Silver-10',
    steps: [4, 4, 4, 3, 4, 4, 3, 4, 4, 3],
    aliases: []
  },
  {
    edo: 37,
    name: 'Spartan-11',
    steps: [5, 2, 5, 2, 5, 2, 5, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Supermavila-7',
    steps: [3, 11, 3, 3, 11, 3, 3],
    aliases: []
  },
  {
    edo: 37,
    name: 'Superpelog-Pelog',
    steps: [3, 5, 8, 5, 3, 5, 8],
    aliases: []
  },
  {
    edo: 37,
    name: 'Superpelog-9',
    steps: [3, 5, 3, 5, 3, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Superpelog-14',
    steps: [3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 2],
    aliases: []
  },
  {
    edo: 37,
    name: 'Tridec-8',
    steps: [5, 4, 5, 4, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Twothirdtonic-9',
    steps: [4, 4, 4, 5, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Twothirdtonic-10',
    steps: [4, 4, 4, 4, 1, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 37,
    name: 'Clanghats',
    steps: [5, 3, 1, 5, 5, 3, 1, 5, 3, 1, 5],
    aliases: []
  },
  {
    edo: 37,
    name: 'Diamond Gate',
    steps: [1, 8, 3, 1, 8, 3, 1, 8, 3, 1],
    aliases: []
  },
  {
    edo: 37,
    name: 'Escapescapes',
    steps: [2, 5, 2, 5, 1, 2, 5, 2, 5, 2, 5, 1],
    aliases: []
  },
  {
    edo: 37,
    name: 'Enshrouded House of Kundalini',
    steps: [2, 1, 4, 2, 1, 4, 2, 1, 4, 2],
    aliases: []
  },
  {
    edo: 38,
    name: 'Astrology-6',
    steps: [7, 5, 7, 7, 5, 7],
    aliases: []
  },
  {
    edo: 38,
    name: 'Astrology-10',
    steps: [5, 2, 5, 5, 2, 5, 2, 5, 5, 2],
    aliases: []
  },
  {
    edo: 38,
    name: 'Decimal-10',
    steps: [3, 5, 3, 5, 3, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 38,
    name: 'Decimal-14',
    steps: [3, 3, 2, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 38,
    name: 'Injera-12',
    steps: [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 38,
    name: 'Injera-14',
    steps: [3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1],
    aliases: []
  },
  {
    edo: 38,
    name: 'Ptolemy-7',
    steps: [6, 5, 6, 5, 6, 5, 5],
    aliases: []
  },
  {
    edo: 38,
    name: 'Subklei-13',
    steps: [2, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2, 2, 5],
    aliases: []
  },
  {
    edo: 38,
    name: 'Supersharp-8',
    steps: [4, 4, 7, 4, 4, 4, 7, 4],
    aliases: []
  },
  {
    edo: 38,
    name: 'Supersharp-10',
    steps: [4, 4, 4, 3, 4, 4, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 39,
    name: 'Twelve-tone Chromatic (4/15-comma positive)',
    steps: [5, 2, 2, 5, 2, 5, 2, 5, 2, 2, 5, 2],
    aliases: []
  },
  {
    edo: 39,
    name: 'Amity-7',
    steps: [6, 5, 6, 5, 6, 6, 5],
    aliases: []
  },
  {
    edo: 39,
    name: 'Armodue-7',
    steps: [5, 7, 5, 5, 5, 7, 5],
    aliases: ['Antidorian']
  },
  {
    edo: 39,
    name: 'Armodue-9',
    steps: [5, 5, 5, 2, 5, 5, 5, 5, 2],
    aliases: ['Superionian']
  },
  {
    edo: 39,
    name: 'Augmented-6',
    steps: [10, 3, 10, 3, 10, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Augmented-9',
    steps: [3, 7, 3, 3, 7, 3, 3, 7, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Augmented-12',
    steps: [3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Augmented-15',
    steps: [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Dicot-7',
    steps: [5, 6, 6, 5, 6, 5, 6],
    aliases: []
  },
  {
    edo: 39,
    name: 'Immunity-5',
    steps: [7, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 39,
    name: 'Immunity-9',
    steps: [7, 7, 1, 7, 1, 7, 1, 7, 1],
    aliases: []
  },
  {
    edo: 39,
    name: 'Immunity-14',
    steps: [2, 2, 9, 2, 2, 9, 2, 9, 2, 2, 9, 2, 2, 9],
    aliases: []
  },
  {
    edo: 39,
    name: 'Machine-6',
    steps: [7, 7, 4, 7, 7, 7],
    aliases: []
  },
  {
    edo: 39,
    name: 'Machine-11',
    steps: [4, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Mavila-7',
    steps: [5, 7, 5, 5, 7, 5, 5],
    aliases: []
  },
  {
    edo: 39,
    name: 'Mavila-9',
    steps: [5, 2, 5, 5, 5, 2, 5, 5, 5],
    aliases: []
  },
  {
    edo: 39,
    name: 'Mohavila-11',
    steps: [5, 1, 5, 1, 5, 5, 1, 5, 5, 1, 5],
    aliases: []
  },
  {
    edo: 39,
    name: 'Negri-9',
    steps: [4, 4, 4, 4, 7, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 39,
    name: 'Negri-10',
    steps: [4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Quasi-equal Pentatonic',
    steps: [8, 8, 7, 8, 8],
    aliases: []
  },
  {
    edo: 39,
    name: 'Quasisuper-12',
    steps: [2, 2, 5, 2, 5, 2, 5, 2, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 39,
    name: 'Supra-5',
    steps: [9, 7, 7, 9, 7],
    aliases: []
  },
  {
    edo: 39,
    name: 'Supra-7',
    steps: [7, 2, 7, 7, 7, 2, 7],
    aliases: []
  },
  {
    edo: 39,
    name: 'Supra-12',
    steps: [2, 5, 2, 5, 2, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 39,
    name: 'Triforce-9',
    steps: [5, 5, 3, 5, 5, 3, 5, 5, 3],
    aliases: []
  },
  {
    edo: 39,
    name: 'Triforce-15',
    steps: [2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 40,
    name: 'Surupan Melog Jawar: Java',
    steps: [4, 5, 13, 4, 14],
    aliases: []
  },
  {
    edo: 40,
    name: 'Surupan Miring: Java',
    steps: [5, 4, 14, 4, 13],
    aliases: []
  },
  {
    edo: 40,
    name: 'Surupan Ajeng: Java',
    steps: [5, 4, 13, 5, 13],
    aliases: []
  },
  {
    edo: 40,
    name: 'Diminished',
    steps: [7, 3, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 40,
    name: 'Octatonic',
    steps: [3, 7, 3, 7, 3, 7, 3, 7],
    aliases: []
  },
  {
    edo: 40,
    name: 'Archytas Clan-10',
    steps: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 40,
    name: 'Archytas Clan-15',
    steps: [2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 40,
    name: 'Blacksmith-10',
    steps: [3, 5, 3, 5, 3, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 40,
    name: 'Blacksmith-15',
    steps: [3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 40,
    name: 'Diminished-12',
    steps: [3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4],
    aliases: ['Demolished-12']
  },
  {
    edo: 40,
    name: 'Fleetwood-14',
    steps: [2, 2, 5, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 5],
    aliases: []
  },
  {
    edo: 40,
    name: 'Guanyintet-5',
    steps: [9, 9, 9, 9, 4],
    aliases: []
  },
  {
    edo: 40,
    name: 'Guanyintet-9',
    steps: [4, 5, 4, 5, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 40,
    name: 'Hemismate-11',
    steps: [5, 2, 5, 2, 5, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 40,
    name: 'Injera-12',
    steps: [3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 5],
    aliases: []
  },
  {
    edo: 40,
    name: 'Injera-14',
    steps: [3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 40,
    name: 'Laz-13',
    steps: [4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Twelve-tone Chromatic (1/44-comma positive)',
    steps: [4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 41,
    name: '"Just" Chromatic',
    steps: [4, 3, 4, 2, 4, 3, 4, 4, 2, 4, 3, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Major',
    steps: [7, 7, 3, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Minor',
    steps: [7, 3, 7, 7, 3, 7, 7],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone "Just" Major',
    steps: [7, 6, 4, 7, 6, 7, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone "Just" Minor',
    steps: [7, 4, 6, 7, 4, 7, 6],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Natural Minor',
    steps: [7, 4, 6, 7, 4, 6, 7],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Melodic Minor',
    steps: [7, 4, 6, 7, 6, 7, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Harmonic Minor',
    steps: [7, 4, 6, 7, 4, 9, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Forty-one tone Harmonic Major',
    steps: [7, 6, 4, 7, 4, 9, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Armodue-7',
    steps: [5, 8, 5, 5, 5, 8, 5],
    aliases: ['Mabila-7']
  },
  {
    edo: 41,
    name: 'Armodue-9',
    steps: [5, 5, 5, 3, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 41,
    name: 'Beatles-7',
    steps: [7, 5, 5, 7, 5, 7, 5],
    aliases: ['Dichotic-7']
  },
  {
    edo: 41,
    name: 'Beatles-10',
    steps: [2, 5, 5, 5, 2, 5, 5, 2, 5, 5],
    aliases: ['Dichotic-10']
  },
  {
    edo: 41,
    name: 'Hemififths-10',
    steps: [2, 5, 5, 2, 5, 5, 2, 5, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mabila-9',
    steps: [5, 5, 3, 5, 5, 5, 5, 3, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Magic-6',
    steps: [11, 2, 11, 2, 13, 2],
    aliases: []
  },
  {
    edo: 41,
    name: 'Magic-7',
    steps: [11, 2, 11, 2, 2, 11, 2],
    aliases: []
  },
  {
    edo: 41,
    name: 'Magic-10',
    steps: [9, 2, 2, 2, 9, 2, 2, 9, 2, 2],
    aliases: []
  },
  {
    edo: 41,
    name: 'Magic-13',
    steps: [7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 41,
    name: 'Maqamic-7',
    steps: [5, 7, 5, 7, 5, 7, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Maqamic-10',
    steps: [5, 2, 5, 5, 2, 5, 5, 5, 2, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Marvel-12',
    steps: [4, 3, 4, 2, 4, 3, 4, 4, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mavila-7',
    steps: [5, 8, 5, 5, 8, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mavila-9',
    steps: [5, 3, 5, 5, 5, 3, 5, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mechanism-8',
    steps: [4, 4, 7, 4, 4, 7, 4, 7],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mechanism-11',
    steps: [4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Miracle-10',
    steps: [4, 4, 4, 4, 4, 4, 4, 4, 4, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Miracle-12',
    steps: [4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 3, 1],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mohajira-7',
    steps: [7, 5, 7, 5, 7, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Mohajira-10',
    steps: [2, 5, 5, 2, 5, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Octacot-14',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    aliases: []
  },
  {
    edo: 41,
    name: 'Octagari-12',
    steps: [3, 3, 5, 3, 3, 3, 4, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 41,
    name: 'Pelogic-5',
    steps: [5, 5, 13, 5, 13],
    aliases: []
  },
  {
    edo: 41,
    name: 'Pelogic-7',
    steps: [5, 5, 5, 8, 5, 5, 8],
    aliases: []
  },
  {
    edo: 41,
    name: 'Superkleismic-7',
    steps: [8, 3, 8, 3, 8, 3, 8],
    aliases: []
  },
  {
    edo: 41,
    name: 'Superkleismic-11',
    steps: [3, 5, 3, 5, 3, 3, 5, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 41,
    name: 'Superkleismic-15',
    steps: [2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3],
    aliases: []
  },
  {
    edo: 41,
    name: 'Schismic-12',
    steps: [3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Septimin-9',
    steps: [4, 5, 4, 5, 4, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Septimin-14',
    steps: [4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 1],
    aliases: []
  },
  {
    edo: 41,
    name: 'Stacks-11',
    steps: [4, 3, 4, 4, 4, 3, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 41,
    name: 'Rodan-5',
    steps: [8, 8, 8, 9, 8],
    aliases: []
  },
  {
    edo: 41,
    name: 'Rodan-11',
    steps: [7, 1, 7, 1, 7, 1, 7, 1, 1, 7, 1],
    aliases: []
  },
  {
    edo: 41,
    name: 'Tetracot-7',
    steps: [6, 6, 6, 6, 6, 6, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Tetracot-13',
    steps: [1, 5, 1, 5, 1, 5, 1, 5, 5, 1, 5, 1, 5],
    aliases: []
  },
  {
    edo: 41,
    name: 'Magical Seventh',
    steps: [11, 11, 11, 8],
    aliases: []
  },
  {
    edo: 41,
    name: 'Quasi-equal Pentatonic',
    steps: [8, 8, 9, 8, 8],
    aliases: []
  },
  {
    edo: 42,
    name: 'Twelve-tone Chromatic',
    steps: [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2],
    aliases: []
  },
  {
    edo: 42,
    name: 'Quasi-equal Pentatonic',
    steps: [4, 4, 5, 4, 4],
    aliases: ['Gorgo-5']
  },
  {
    edo: 42,
    name: 'Quasi-equal Hexatonic',
    steps: [4, 3, 4, 3, 4, 3],
    aliases: ['Ternary-6']
  },
  {
    edo: 42,
    name: 'Quasi-equal Enneatonic',
    steps: [2, 3, 2, 2, 3, 2, 2, 3, 2],
    aliases: ['Deflated-9']
  },
  {
    edo: 42,
    name: 'Augment-6',
    steps: [3, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Augment-9',
    steps: [3, 1, 3, 3, 1, 3, 3, 1, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Augment-15',
    steps: [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'August-6',
    steps: [5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 42,
    name: 'August-9',
    steps: [3, 2, 2, 3, 2, 2, 3, 2, 2],
    aliases: []
  },
  {
    edo: 42,
    name: 'August-12',
    steps: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2],
    aliases: []
  },
  {
    edo: 42,
    name: 'Father-5',
    steps: [5, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Father-8',
    steps: [3, 2, 3, 3, 2, 3, 3, 2],
    aliases: []
  },
  {
    edo: 42,
    name: 'Gorgo-6',
    steps: [4, 4, 1, 4, 4, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Gorgo-Pelog',
    steps: [1, 4, 4, 3, 1, 4, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Gorgo-11',
    steps: [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'Miracle-10',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Miracle-11',
    steps: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'Oodako-9',
    steps: [3, 3, 1, 3, 3, 1, 3, 3, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'Septimal-14',
    steps: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'Spartan-11',
    steps: [3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    aliases: []
  },
  {
    edo: 42,
    name: 'Subklei-13',
    steps: [1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Tridec-8',
    steps: [3, 2, 3, 2, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Pelog Lima',
    steps: [2, 3, 7, 2, 7],
    aliases: []
  },
  {
    edo: 42,
    name: 'Balzano Thirteen-tone',
    steps: [4, 3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Balzano Thirteen-tone inverse',
    steps: [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Augene-9',
    steps: [3, 8, 3, 3, 8, 3, 3, 8, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Augene-12',
    steps: [3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Augene-15',
    steps: [3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Hexe-12',
    steps: [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 42,
    name: 'Joan-9',
    steps: [7, 4, 4, 4, 7, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Joan-11',
    steps: [3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Lemba-6',
    steps: [8, 5, 8, 8, 5, 8],
    aliases: []
  },
  {
    edo: 42,
    name: 'Lemba-10',
    steps: [5, 3, 5, 3, 5, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 42,
    name: 'Pajaro-12',
    steps: [4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 42,
    name: 'Sephiroth-7',
    steps: [3, 3, 10, 3, 10, 3, 10],
    aliases: []
  },
  {
    edo: 42,
    name: 'Sephiroth-10',
    steps: [3, 3, 3, 7, 3, 3, 7, 3, 3, 7],
    aliases: []
  },
  {
    edo: 42,
    name: 'Sephiroth-13',
    steps: [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Meantone Chromatic (1/5-comma)',
    steps: [3, 4, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Genus diatonico-chromaticum',
    steps: [4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Forty-three tone Major',
    steps: [7, 7, 4, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Forty-three tone Natural Minor',
    steps: [7, 4, 7, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 43,
    name: 'Forty-three tone Melodic Minor',
    steps: [7, 4, 7, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Forty-three tone Harmonic Minor',
    steps: [7, 4, 7, 7, 4, 10, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Forty-three tone Harmonic Major',
    steps: [7, 7, 4, 7, 4, 10, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Mixolydian',
    steps: [3, 3, 12, 3, 3, 12, 7],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Lydian',
    steps: [3, 12, 3, 3, 12, 7, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Phrygian',
    steps: [12, 3, 3, 12, 7, 3, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Dorian',
    steps: [3, 3, 12, 7, 3, 3, 12],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Hypolydian',
    steps: [3, 12, 7, 3, 3, 12, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Hypophrygian',
    steps: [12, 7, 3, 3, 12, 3, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Parachromatic Hypodorian',
    steps: [7, 3, 3, 12, 3, 3, 12],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Mixolydian',
    steps: [3, 6, 9, 3, 6, 9, 7],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Lydian',
    steps: [6, 9, 3, 6, 9, 7, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Phrygian',
    steps: [9, 3, 6, 9, 7, 3, 6],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Dorian',
    steps: [3, 6, 9, 7, 3, 6, 9],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Hypolydian',
    steps: [6, 9, 7, 3, 6, 9, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Hypophrygian',
    steps: [9, 7, 3, 6, 9, 3, 6],
    aliases: []
  },
  {
    edo: 43,
    name: 'Soft Diatonic Hypodorian',
    steps: [7, 3, 6, 9, 3, 6, 9],
    aliases: []
  },
  {
    edo: 43,
    name: 'Bleu-9',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 3],
    aliases: ['Jerome-9']
  },
  {
    edo: 43,
    name: 'Dicot-7',
    steps: [5, 7, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 43,
    name: 'Godzilla-5',
    steps: [7, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 43,
    name: 'Godzilla-9',
    steps: [7, 7, 2, 7, 2, 7, 2, 7, 2],
    aliases: []
  },
  {
    edo: 43,
    name: 'Godzilla-14',
    steps: [5, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2],
    aliases: []
  },
  {
    edo: 43,
    name: 'Kumonga-11',
    steps: [3, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 43,
    name: 'Mabila-7',
    steps: [5, 9, 5, 5, 5, 9, 5],
    aliases: []
  },
  {
    edo: 43,
    name: 'Mabila-9',
    steps: [5, 5, 4, 5, 5, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 43,
    name: 'Nautilus-14',
    steps: [3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Submajor-10',
    steps: [5, 4, 4, 5, 4, 4, 5, 4, 4, 4],
    aliases: []
  },
  {
    edo: 43,
    name: 'Thuja-13',
    steps: [5, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 43,
    name: 'Thuja-15',
    steps: [2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Octatonic',
    steps: [3, 8, 3, 8, 3, 8, 3, 8],
    aliases: []
  },
  {
    edo: 44,
    name: 'Diminished',
    steps: [8, 3, 8, 3, 8, 3, 8, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Quasi-equal Octatonic',
    steps: [5, 6, 5, 6, 5, 6, 5, 6],
    aliases: []
  },
  {
    edo: 44,
    name: 'Anguirus-10',
    steps: [4, 4, 5, 4, 5, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 44,
    name: 'Anguirus-14',
    steps: [4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 44,
    name: 'A-Team-5',
    steps: [10, 7, 10, 7, 10],
    aliases: []
  },
  {
    edo: 44,
    name: 'A-Team-8',
    steps: [7, 3, 7, 7, 3, 7, 7, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Beatles-7',
    steps: [8, 5, 5, 8, 5, 8, 5],
    aliases: ['Dichotic-7']
  },
  {
    edo: 44,
    name: 'Beatles-10',
    steps: [3, 5, 5, 5, 3, 5, 5, 3, 5, 5],
    aliases: ['Dichotic-10']
  },
  {
    edo: 44,
    name: 'Bipelog-14',
    steps: [3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Blackbirds-12',
    steps: [2, 7, 2, 2, 7, 2, 2, 7, 2, 2, 7, 2],
    aliases: []
  },
  {
    edo: 44,
    name: 'Bleu-9',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 4],
    aliases: []
  },
  {
    edo: 44,
    name: 'Decibel-6',
    steps: [4, 9, 9, 4, 9, 9],
    aliases: []
  },
  {
    edo: 44,
    name: 'Decibel-10',
    steps: [4, 5, 4, 5, 4, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 44,
    name: 'Demolished-12',
    steps: [3, 3, 5, 3, 3, 5, 3, 3, 5, 3, 3, 5],
    aliases: []
  },
  {
    edo: 44,
    name: 'Diminished-12',
    steps: [4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Nautilus-14',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Semisept-13',
    steps: [4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 3, 3],
    aliases: []
  },
  {
    edo: 44,
    name: 'Deutone-7',
    steps: [7, 7, 7, 7, 7, 7, 2],
    aliases: ['Spell-7']
  },
  {
    edo: 44,
    name: 'Deutone-13',
    steps: [5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 2],
    aliases: ['Spell-13']
  },
  {
    edo: 44,
    name: 'Suhajira-7',
    steps: [8, 5, 8, 5, 8, 5, 5],
    aliases: []
  },
  {
    edo: 44,
    name: 'Suhajira-10',
    steps: [5, 3, 5, 5, 3, 5, 5, 5, 3, 5],
    aliases: []
  },
  {
    edo: 45,
    name: 'Meantone Chromatic (2/5-comma)',
    steps: [2, 5, 5, 2, 5, 2, 5, 2, 5, 5, 2, 5],
    aliases: []
  },
  {
    edo: 45,
    name: 'Forty-five tone Major',
    steps: [7, 7, 5, 7, 7, 7, 5],
    aliases: []
  },
  {
    edo: 45,
    name: 'Forty-five tone Minor',
    steps: [7, 5, 7, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 45,
    name: 'August-9',
    steps: [7, 4, 4, 7, 4, 4, 7, 4, 4],
    aliases: []
  },
  {
    edo: 45,
    name: 'August-12',
    steps: [3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4],
    aliases: []
  },
  {
    edo: 45,
    name: 'Ferrum-10',
    steps: [4, 5, 4, 5, 4, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 45,
    name: 'Flattone-12',
    steps: [2, 5, 5, 2, 5, 2, 5, 5, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 45,
    name: 'Glacial-7',
    steps: [7, 7, 7, 7, 3, 7, 7],
    aliases: []
  },
  {
    edo: 45,
    name: 'Glacial-13',
    steps: [4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 45,
    name: 'Machine-6',
    steps: [8, 8, 5, 8, 8, 8],
    aliases: []
  },
  {
    edo: 45,
    name: 'Machine-11',
    steps: [5, 3, 5, 3, 5, 3, 5, 3, 5, 5, 3],
    aliases: []
  },
  {
    edo: 45,
    name: 'Ptolemy-7',
    steps: [7, 6, 7, 6, 7, 6, 6],
    aliases: []
  },
  {
    edo: 45,
    name: 'Ripple-12',
    steps: [4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 45,
    name: 'Squares-11',
    steps: [7, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3],
    aliases: []
  },
  {
    edo: 45,
    name: 'Squares-14',
    steps: [4, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Twelve-tone Chromatic (1/9-comma positive)',
    steps: [5, 3, 3, 5, 3, 5, 3, 5, 3, 3, 5, 3],
    aliases: []
  },
  {
    edo: 46,
    name: '"Just" Chromatic',
    steps: [4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone "Just" Major',
    steps: [8, 7, 4, 8, 7, 8, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone "Just" Minor',
    steps: [8, 4, 7, 8, 4, 7, 8],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone Natural Minor',
    steps: [8, 4, 7, 8, 4, 8, 7],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone Melodic Minor',
    steps: [8, 4, 7, 8, 7, 8, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone Harmonic Minor',
    steps: [8, 4, 7, 8, 4, 11, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Forty-six tone Harmonic Major',
    steps: [8, 7, 4, 8, 4, 11, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Rast',
    steps: [8, 6, 5, 8, 6, 5, 8],
    aliases: []
  },
  {
    edo: 46,
    name: 'Arabic Diatonic',
    steps: [8, 6, 5, 8, 8, 6, 5],
    aliases: []
  },
  {
    edo: 46,
    name: 'Amity-7',
    steps: [7, 6, 7, 6, 7, 7, 6],
    aliases: []
  },
  {
    edo: 46,
    name: 'Bipelog-14',
    steps: [3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Bluebirds-7',
    steps: [7, 7, 7, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 46,
    name: 'Bluebirds-13',
    steps: [3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Diaschismic-10',
    steps: [4, 4, 4, 7, 4, 4, 4, 4, 7, 4],
    aliases: ['Pajara-10']
  },
  {
    edo: 46,
    name: 'Diaschismic-12',
    steps: [4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4],
    aliases: ['Pajara-12']
  },
  {
    edo: 46,
    name: 'Echidnic-10',
    steps: [4, 5, 5, 4, 5, 4, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 46,
    name: 'Hemiamity-14',
    steps: [4, 3, 3, 4, 3, 3, 3, 4, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Octokaidecal-8',
    steps: [5, 5, 5, 8, 5, 5, 5, 8],
    aliases: []
  },
  {
    edo: 46,
    name: 'Octokaidecal-10',
    steps: [5, 5, 5, 5, 3, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Plum',
    steps: [5, 5, 5, 2, 3, 2, 5, 5, 5, 4, 1, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Rodan-5',
    steps: [9, 9, 9, 10, 9],
    aliases: []
  },
  {
    edo: 46,
    name: 'Rodan-11',
    steps: [8, 1, 8, 1, 8, 1, 8, 1, 1, 8, 1],
    aliases: []
  },
  {
    edo: 46,
    name: 'Schism-12',
    steps: [3, 5, 3, 3, 5, 3, 5, 3, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 46,
    name: 'Sensi-8',
    steps: [5, 5, 7, 5, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 46,
    name: 'Sensi-11',
    steps: [5, 5, 5, 2, 5, 5, 5, 2, 5, 5, 2],
    aliases: []
  },
  {
    edo: 46,
    name: 'Starling-12',
    steps: [3, 6, 3, 3, 4, 5, 3, 4, 3, 5, 4, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Twothirdtonic-9',
    steps: [5, 5, 5, 6, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 46,
    name: 'Twothirdtonic-10',
    steps: [5, 5, 5, 5, 1, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 46,
    name: 'Valentine-15',
    steps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 46,
    name: 'Pentachordal Decatonic',
    steps: [7, 4, 4, 4, 7, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 46,
    name: 'Smith\'s Star',
    steps: [3, 9, 3, 9, 3, 7, 5, 7],
    aliases: []
  },
  {
    edo: 46,
    name: 'Smith\'s Nova',
    steps: [5, 7, 3, 9, 3, 7, 5, 7],
    aliases: []
  },
  {
    edo: 46,
    name: 'Symmetrical Decatonic',
    steps: [4, 4, 7, 4, 4, 4, 4, 7, 4, 4],
    aliases: []
  },
  {
    edo: 47,
    name: 'Baldy-6',
    steps: [8, 7, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 47,
    name: 'Baldy-11',
    steps: [7, 1, 7, 1, 7, 1, 7, 7, 1, 7, 1],
    aliases: []
  },
  {
    edo: 47,
    name: 'Kangaroo-13',
    steps: [7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 47,
    name: 'Negri-9',
    steps: [5, 5, 5, 5, 7, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 47,
    name: 'Negri-10',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 47,
    name: 'Progress-15',
    steps: [3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 47,
    name: 'Ragimetric-13',
    steps: [5, 3, 3, 5, 3, 3, 5, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 47,
    name: 'Ripple-12',
    steps: [4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 47,
    name: 'Sharp-7',
    steps: [9, 5, 9, 5, 9, 5, 5],
    aliases: []
  },
  {
    edo: 47,
    name: 'Sharp-10',
    steps: [4, 5, 5, 5, 4, 5, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 47,
    name: 'Silver-7',
    steps: [5, 9, 5, 9, 5, 5, 9],
    aliases: []
  },
  {
    edo: 47,
    name: 'Silver-10',
    steps: [5, 5, 5, 4, 5, 5, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 47,
    name: 'Spartan-11',
    steps: [7, 2, 7, 2, 7, 2, 7, 2, 2, 7, 2],
    aliases: []
  },
  {
    edo: 47,
    name: 'Wilson Golden-11',
    steps: [5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Mixolydian',
    steps: [3, 3, 14, 3, 3, 14, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Lydian',
    steps: [3, 14, 3, 3, 14, 8, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Phrygian',
    steps: [14, 3, 3, 14, 8, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Dorian',
    steps: [3, 3, 14, 8, 3, 3, 14],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Hypolydian',
    steps: [3, 14, 8, 3, 3, 14, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Hypophrygian',
    steps: [14, 8, 3, 3, 14, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic Hypodorian',
    steps: [8, 3, 3, 14, 3, 3, 14],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Mixolydian',
    steps: [5, 5, 10, 5, 5, 10, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Lydian',
    steps: [5, 10, 5, 5, 10, 8, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Phrygian',
    steps: [10, 5, 5, 10, 8, 5, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Dorian',
    steps: [5, 5, 10, 8, 5, 5, 10],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Hypolydian',
    steps: [5, 10, 8, 5, 5, 10, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Hypophrygian',
    steps: [10, 8, 5, 5, 10, 5, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Soft Diatonic Hypodorian',
    steps: [8, 5, 5, 10, 5, 5, 10],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Mixolydian',
    steps: [3, 9, 8, 3, 9, 8, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Lydian',
    steps: [9, 8, 3, 9, 8, 8, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Phrygian',
    steps: [8, 3, 9, 8, 8, 3, 9],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Dorian',
    steps: [3, 9, 8, 8, 3, 9, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Hypolydian',
    steps: [9, 8, 8, 3, 9, 8, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Hypophrygian',
    steps: [8, 8, 3, 9, 8, 3, 9],
    aliases: []
  },
  {
    edo: 48,
    name: 'Diatonic + Hemiolic Chromatic Diesis Hypodorian',
    steps: [8, 3, 9, 8, 3, 9, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hemiolic Chromatic and Diatonic Dorian mixed',
    steps: [3, 3, 6, 8, 8, 3, 3, 6, 8],
    aliases: []
  },
  {
    edo: 48,
    name: 'Octatonic',
    steps: [5, 7, 5, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 48,
    name: 'Augene-9',
    steps: [3, 10, 3, 3, 10, 3, 3, 10, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Augene-12',
    steps: [3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Augene-15',
    steps: [3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Doublewide-10',
    steps: [2, 9, 2, 9, 2, 2, 9, 2, 9, 2],
    aliases: []
  },
  {
    edo: 48,
    name: 'Doublewide-14',
    steps: [2, 2, 7, 2, 2, 7, 2, 2, 2, 7, 2, 2, 7, 2],
    aliases: []
  },
  {
    edo: 48,
    name: 'Hexe-12',
    steps: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Inflated-12',
    steps: [7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Inflated-15',
    steps: [3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Quasi-equal Enneatonic',
    steps: [5, 5, 5, 5, 8, 5, 5, 5, 5],
    aliases: ['Negri-9']
  },
  {
    edo: 48,
    name: 'Negri-10',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Oodako-9',
    steps: [7, 7, 2, 7, 7, 2, 7, 7, 2],
    aliases: []
  },
  {
    edo: 48,
    name: 'Orgone-7',
    steps: [4, 9, 9, 4, 9, 4, 9],
    aliases: []
  },
  {
    edo: 48,
    name: 'Orgone-11',
    steps: [4, 4, 5, 4, 5, 4, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Orgone-15',
    steps: [4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 48,
    name: 'Sentinel-14',
    steps: [3, 5, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Squares-11',
    steps: [8, 3, 3, 8, 3, 3, 3, 8, 3, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Squares-14',
    steps: [5, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 48,
    name: 'Supersharp-8',
    steps: [5, 5, 9, 5, 5, 5, 9, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Supersharp-10',
    steps: [5, 5, 5, 4, 5, 5, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Keenan Decatonic',
    steps: [5, 5, 5, 3, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 48,
    name: 'Lumma Decatonic',
    steps: [5, 5, 5, 5, 5, 3, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 49,
    name: 'Ares-12',
    steps: [4, 3, 6, 3, 4, 3, 6, 4, 3, 6, 3, 4],
    aliases: []
  },
  {
    edo: 49,
    name: 'Guanyintet-5',
    steps: [11, 11, 11, 11, 5],
    aliases: []
  },
  {
    edo: 49,
    name: 'Guanyintet-9',
    steps: [5, 6, 5, 6, 5, 6, 5, 5, 6],
    aliases: []
  },
  {
    edo: 49,
    name: 'Kleismic-7',
    steps: [3, 10, 3, 10, 3, 10, 10],
    aliases: []
  },
  {
    edo: 49,
    name: 'Kleismic-11',
    steps: [3, 3, 7, 3, 7, 3, 3, 7, 3, 3, 7],
    aliases: []
  },
  {
    edo: 49,
    name: 'Laz-13',
    steps: [5, 1, 5, 5, 1, 5, 5, 1, 5, 5, 5, 1, 5],
    aliases: []
  },
  {
    edo: 49,
    name: 'Passion-12',
    steps: [4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 49,
    name: 'Semisept-13',
    steps: [5, 3, 5, 3, 3, 5, 3, 5, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 49,
    name: 'Septimal-14',
    steps: [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 49,
    name: 'Superpyth-12',
    steps: [2, 7, 2, 2, 7, 2, 7, 2, 2, 7, 2, 7],
    aliases: []
  },
  {
    edo: 49,
    name: 'Supra-5',
    steps: [11, 9, 9, 11, 9],
    aliases: []
  },
  {
    edo: 49,
    name: 'Supra-7',
    steps: [9, 2, 9, 9, 9, 2, 9],
    aliases: []
  },
  {
    edo: 49,
    name: 'Supra-12',
    steps: [2, 7, 2, 7, 2, 2, 7, 2, 7, 2, 7, 2],
    aliases: []
  },
  {
    edo: 49,
    name: 'Whitewood-14',
    steps: [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Meantone Chromatic (5/18-comma)',
    steps: [3, 5, 5, 3, 5, 3, 5, 3, 5, 5, 3, 5],
    aliases: ['Eair-12']
  },
  {
    edo: 50,
    name: 'Fifty tone Major',
    steps: [8, 8, 5, 8, 8, 8, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Fifty tone Natural Minor',
    steps: [8, 5, 8, 8, 5, 8, 8],
    aliases: []
  },
  {
    edo: 50,
    name: 'Fifty tone Melodic Minor',
    steps: [8, 5, 8, 8, 8, 8, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Fifty tone Harmonic Minor',
    steps: [8, 5, 8, 8, 5, 11, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Fifty tone Harmonic Major',
    steps: [8, 8, 5, 8, 5, 11, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Diminished',
    steps: [8, 5, 8, 5, 8, 3, 8, 5],
    aliases: ['Modus conjunctus']
  },
  {
    edo: 50,
    name: 'Octatonic',
    steps: [5, 8, 5, 8, 3, 8, 5, 8],
    aliases: []
  },
  {
    edo: 50,
    name: 'Taylor Whole-Tone',
    steps: [8, 8, 9, 9, 8, 8],
    aliases: []
  },
  {
    edo: 50,
    name: 'Astrology-6',
    steps: [9, 7, 9, 9, 7, 9],
    aliases: []
  },
  {
    edo: 50,
    name: 'Astrology-10',
    steps: [7, 2, 7, 7, 2, 7, 2, 7, 7, 2],
    aliases: []
  },
  {
    edo: 50,
    name: 'Parizek-11',
    steps: [4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7],
    aliases: []
  },
  {
    edo: 50,
    name: 'Parizek-13',
    steps: [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 50,
    name: 'Injera-12',
    steps: [4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Injera-14',
    steps: [4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 50,
    name: 'Machine-6',
    steps: [9, 9, 5, 9, 9, 9],
    aliases: []
  },
  {
    edo: 50,
    name: 'Machine-11',
    steps: [5, 4, 5, 4, 5, 4, 5, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 50,
    name: 'Marvel-12',
    steps: [5, 3, 5, 3, 5, 3, 5, 5, 5, 1, 5, 5],
    aliases: []
  },
  {
    edo: 50,
    name: 'Septimin-9',
    steps: [5, 6, 5, 6, 5, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 50,
    name: 'Septimin-14',
    steps: [5, 5, 1, 5, 5, 1, 5, 5, 1, 5, 5, 1, 5, 1],
    aliases: []
  },
  {
    edo: 50,
    name: 'Slurpee-15',
    steps: [8, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 50,
    name: 'Trisedodge-10',
    steps: [3, 7, 3, 7, 3, 7, 3, 7, 3, 7],
    aliases: []
  },
  {
    edo: 50,
    name: 'Trisedodge-15',
    steps: [3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4],
    aliases: []
  },
  {
    edo: 50,
    name: 'Urchin-14',
    steps: [4, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 50,
    name: 'Vishnu-14',
    steps: [7, 3, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 50,
    name: 'Wreckmeister',
    steps: [3, 5, 5, 3, 5, 3, 5, 5, 3, 3, 7, 3],
    aliases: []
  },
  {
    edo: 51,
    name: 'Augmented-6',
    steps: [13, 4, 13, 4, 13, 4],
    aliases: []
  },
  {
    edo: 51,
    name: 'Augmented-9',
    steps: [4, 9, 4, 4, 9, 4, 4, 9, 4],
    aliases: []
  },
  {
    edo: 51,
    name: 'Augmented-12',
    steps: [4, 4, 5, 4, 4, 4, 5, 4, 4, 4, 5, 4],
    aliases: []
  },
  {
    edo: 51,
    name: 'Augmented-15',
    steps: [4, 4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4, 4],
    aliases: []
  },
  {
    edo: 51,
    name: 'Deflated-9',
    steps: [5, 7, 5, 5, 7, 5, 5, 7, 5],
    aliases: []
  },
  {
    edo: 51,
    name: 'Glacial-7',
    steps: [8, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 51,
    name: 'Glacial-13',
    steps: [5, 3, 5, 3, 5, 3, 5, 3, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 51,
    name: 'Hemiaug-12',
    steps: [11, 2, 2, 2, 11, 2, 2, 2, 11, 2, 2, 2],
    aliases: []
  },
  {
    edo: 51,
    name: 'Inflated-12',
    steps: [8, 3, 3, 3, 8, 3, 3, 3, 8, 3, 3, 3],
    aliases: []
  },
  {
    edo: 51,
    name: 'Inflated-15',
    steps: [3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3],
    aliases: []
  },
  {
    edo: 51,
    name: 'Miracle-10',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    aliases: []
  },
  {
    edo: 51,
    name: 'Miracle-12',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 4, 1],
    aliases: []
  },
  {
    edo: 51,
    name: 'Porcupine-7',
    steps: [7, 7, 7, 9, 7, 7, 7],
    aliases: []
  },
  {
    edo: 51,
    name: 'Porcupine-7 Major',
    steps: [7, 9, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 51,
    name: 'Porcupine-8',
    steps: [7, 7, 7, 7, 7, 7, 7, 2],
    aliases: []
  },
  {
    edo: 51,
    name: 'Porcupine-15',
    steps: [5, 2, 5, 2, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 51,
    name: 'Porky-7',
    steps: [9, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 51,
    name: 'Rodan-5',
    steps: [10, 10, 10, 10, 11],
    aliases: []
  },
  {
    edo: 51,
    name: 'Rodan-11',
    steps: [9, 1, 9, 1, 9, 1, 9, 1, 1, 9, 1],
    aliases: []
  },
  {
    edo: 51,
    name: 'Score-7',
    steps: [13, 5, 5, 13, 5, 5, 5],
    aliases: []
  },
  {
    edo: 51,
    name: 'Score-9',
    steps: [5, 8, 5, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 51,
    name: 'Score-11',
    steps: [3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 51,
    name: 'Superpelog-9',
    steps: [4, 7, 4, 7, 4, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 51,
    name: 'Superpelog-14',
    steps: [4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3],
    aliases: []
  },
  {
    edo: 52,
    name: 'Diminished',
    steps: [9, 4, 9, 4, 9, 4, 9, 4],
    aliases: []
  },
  {
    edo: 52,
    name: 'Octatonic',
    steps: [4, 9, 4, 9, 4, 9, 4, 9],
    aliases: []
  },
  {
    edo: 52,
    name: 'Quasi-equal Octatonic',
    steps: [6, 7, 6, 7, 6, 7, 6, 7],
    aliases: []
  },
  {
    edo: 52,
    name: 'Apparatus-10',
    steps: [5, 5, 5, 5, 5, 5, 5, 7, 5, 5],
    aliases: []
  },
  {
    edo: 52,
    name: 'Apparatus-11',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 52,
    name: 'Decimal-10',
    steps: [4, 7, 4, 7, 4, 4, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 52,
    name: 'Decimal-14',
    steps: [4, 4, 3, 4, 4, 4, 3, 4, 4, 3, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 52,
    name: 'Demolished-12',
    steps: [4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 52,
    name: 'Godzilla-5',
    steps: [8, 11, 11, 11, 11],
    aliases: []
  },
  {
    edo: 52,
    name: 'Godzilla-9',
    steps: [8, 8, 3, 8, 3, 8, 3, 8, 3],
    aliases: []
  },
  {
    edo: 52,
    name: 'Godzilla-14',
    steps: [5, 3, 5, 3, 3, 5, 3, 3, 5, 3, 3, 5, 3, 3],
    aliases: []
  },
  {
    edo: 52,
    name: 'Hedgehog-8',
    steps: [5, 7, 7, 7, 5, 7, 7, 7],
    aliases: []
  },
  {
    edo: 52,
    name: 'Hedgehog-14',
    steps: [5, 2, 5, 5, 2, 5, 2, 5, 2, 5, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 52,
    name: 'Mechanism-8',
    steps: [5, 5, 9, 5, 5, 9, 5, 9],
    aliases: []
  },
  {
    edo: 52,
    name: 'Mechanism-11',
    steps: [5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 52,
    name: 'Ptolemy-7',
    steps: [8, 7, 8, 7, 8, 7, 7],
    aliases: []
  },
  {
    edo: 52,
    name: 'Urchin-14',
    steps: [5, 5, 2, 5, 2, 5, 2, 5, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 53,
    name: '"Just" Chromatic',
    steps: [5, 4, 5, 3, 5, 4, 5, 5, 3, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Meantone Chromatic (1/315-comma)',
    steps: [5, 4, 4, 5, 4, 5, 4, 5, 4, 4, 5, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone "Just" Major',
    steps: [9, 8, 5, 9, 8, 9, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone "Just" Minor',
    steps: [9, 5, 8, 9, 5, 9, 8],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone Natural Minor',
    steps: [9, 5, 8, 9, 5, 8, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone Melodic Minor',
    steps: [9, 5, 8, 9, 8, 9, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone Harmonic Minor',
    steps: [9, 5, 8, 9, 5, 12, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Fifty-three tone Harmonic Major',
    steps: [9, 8, 5, 9, 5, 12, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Genus diatonico-chromaticum',
    steps: [5, 4, 5, 3, 5, 4, 5, 5, 3, 6, 3, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Hyperenharmonic Dorian',
    steps: [1, 1, 20, 9, 1, 1, 20],
    aliases: []
  },
  {
    edo: 53,
    name: 'Newton',
    steps: [8, 1, 4, 4, 5, 4, 4, 1, 4, 4, 1, 4, 4, 4, 1],
    aliases: []
  },
  {
    edo: 53,
    name: 'Amity-7',
    steps: [8, 7, 8, 7, 8, 8, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Baldy-6',
    steps: [9, 8, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Baldy-11',
    steps: [8, 1, 8, 1, 8, 1, 8, 8, 1, 8, 1],
    aliases: []
  },
  {
    edo: 53,
    name: 'Bleu-9',
    steps: [6, 6, 6, 6, 6, 6, 6, 6, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Gorgo-6',
    steps: [10, 10, 3, 10, 10, 10],
    aliases: []
  },
  {
    edo: 53,
    name: 'Gorgo-Pelog',
    steps: [3, 10, 10, 7, 3, 10, 10],
    aliases: []
  },
  {
    edo: 53,
    name: 'Gorgo-11',
    steps: [3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 53,
    name: 'Hemikleismic-15',
    steps: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Kleismic-7',
    steps: [3, 11, 3, 11, 3, 11, 11],
    aliases: []
  },
  {
    edo: 53,
    name: 'Kleismic-11',
    steps: [3, 3, 8, 3, 8, 3, 3, 8, 3, 3, 8],
    aliases: []
  },
  {
    edo: 53,
    name: 'Kleismic-15',
    steps: [3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Marvel-12',
    steps: [5, 4, 5, 3, 5, 4, 5, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Mavila-7',
    steps: [7, 9, 7, 7, 9, 7, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Mavila-9',
    steps: [7, 2, 7, 7, 7, 2, 7, 7, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Orwell-5',
    steps: [12, 12, 12, 12, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Orwell-9',
    steps: [7, 5, 7, 5, 7, 5, 7, 5, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Orwell-13',
    steps: [2, 5, 5, 2, 5, 5, 2, 5, 5, 2, 5, 5, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Schismic-12',
    steps: [4, 5, 4, 4, 5, 4, 5, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Spartan-11',
    steps: [7, 3, 7, 3, 7, 3, 7, 3, 3, 7, 3],
    aliases: []
  },
  {
    edo: 53,
    name: 'Submajor-10',
    steps: [6, 5, 5, 6, 5, 5, 6, 5, 5, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Rast',
    steps: [9, 8, 5, 9, 9, 4, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Nihavend',
    steps: [9, 4, 9, 9, 4, 9, 9],
    aliases: ['Muberka', 'Fifty-three tone Minor']
  },
  {
    edo: 53,
    name: 'Makam Yegah',
    steps: [9, 8, 5, 9, 8, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Yegah',
    steps: [9, 8, 5, 9, 8, 1, 4, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Sazkar',
    steps: [9, 8, 5, 9, 9, 8, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Sultaniyegah',
    steps: [9, 4, 9, 9, 4, 9, 4, 5],
    aliases: ['Ruhnevaz', 'Ferahfeza (Farahfaza)']
  },
  {
    edo: 53,
    name: 'Makam Ferahnuma',
    steps: [4, 9, 9, 9, 4, 9, 9],
    aliases: ['Askefza', 'Acem Kurdi']
  },
  {
    edo: 53,
    name: 'Makam Sedaraban',
    steps: [5, 12, 5, 9, 5, 8, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Huseyniasiran',
    steps: [8, 5, 9, 8, 5, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Suzidil',
    steps: [5, 12, 5, 9, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Acemasiran',
    steps: [9, 9, 4, 4, 5, 9, 9, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Sevkefza',
    steps: [9, 5, 4, 4, 4, 5, 5, 13, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Iraq',
    steps: [5, 9, 8, 5, 9, 9, 4, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Evic',
    steps: [5, 9, 8, 5, 4, 5, 9, 4, 4],
    aliases: ['Segah']
  },
  {
    edo: 53,
    name: 'Makam Ferahnak',
    steps: [5, 9, 8, 1, 4, 4, 5, 9, 4, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Evcara (Evicara)',
    steps: [5, 13, 4, 9, 5, 13, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Mahur',
    steps: [9, 9, 4, 9, 9, 4, 5, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Suzidilara',
    steps: [9, 5, 4, 4, 4, 5, 9, 4, 5, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Buzurk',
    steps: [9, 9, 4, 4, 5, 9, 4, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Suzinak',
    steps: [5, 4, 4, 4, 5, 9, 4, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Zirguleli Suzinak',
    steps: [5, 12, 5, 5, 4, 4, 4, 5, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Hicazkar',
    steps: [5, 12, 5, 9, 5, 3, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Kurdilihicazkar',
    steps: [4, 1, 4, 4, 4, 5, 9, 4, 4, 5, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Nihavend (Nihavent)',
    steps: [9, 4, 9, 5, 4, 4, 5, 8, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Neveser',
    steps: [9, 5, 12, 5, 5, 12, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Nikriz',
    steps: [9, 5, 12, 5, 9, 4, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Huseyni',
    steps: [8, 5, 9, 9, 4, 4, 5, 9],
    aliases: ['Muhayyer', 'Neva', 'Gerdaniye', 'Tahir']
  },
  {
    edo: 53,
    name: 'Makam Muhayyer Kurdi',
    steps: [4, 4, 5, 9, 9, 4, 4, 5, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Tahir Buselik',
    steps: [8, 1, 4, 9, 9, 8, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Gulizar',
    steps: [8, 5, 9, 5, 4, 4, 4, 5, 9],
    aliases: ['Beyati (Bayati)', 'Karcigar']
  },
  {
    edo: 53,
    name: 'Makam Ussak',
    steps: [8, 5, 9, 9, 4, 9, 9],
    aliases: ['Acem', 'Arazbar']
  },
  {
    edo: 53,
    name: 'Makam Isfahan',
    steps: [8, 1, 4, 4, 5, 9, 4, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Kurdi',
    steps: [4, 4, 1, 4, 9, 4, 5, 4, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Buselik (Puselik)',
    steps: [9, 4, 9, 5, 4, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Sehnaz Buselik',
    steps: [9, 4, 9, 9, 4, 13, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Arazbar',
    steps: [8, 5, 9, 5, 3, 1, 4, 4, 5, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Hicaz',
    steps: [5, 12, 5, 9, 4, 4, 5, 9],
    aliases: ['Uzzal', 'Humayun']
  },
  {
    edo: 53,
    name: 'Makam Zirgule (Zengule)',
    steps: [5, 12, 5, 9, 4, 1, 8, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Zirguleli Hicaz',
    steps: [5, 12, 5, 9, 4, 13, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Sehnaz',
    steps: [5, 12, 5, 9, 4, 1, 3, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Saba',
    steps: [8, 5, 5, 13, 4, 9, 9],
    aliases: ['Sunbule']
  },
  {
    edo: 53,
    name: 'Makam Saba Zemzeme',
    steps: [8, 5, 5, 13, 4, 9, 5, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Kucek',
    steps: [8, 5, 5, 13, 4, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Eski Sipihr',
    steps: [8, 5, 5, 4, 9, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Dugah',
    steps: [4, 4, 5, 4, 1, 13, 4, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Hisar',
    steps: [8, 5, 9, 4, 5, 4, 1, 8, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Hisar Buselik',
    steps: [4, 9, 4, 5, 8, 1, 4, 9, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Yeni Sipihr',
    steps: [5, 3, 5, 4, 5, 4, 5, 4, 1, 3, 5, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Nisaburek',
    steps: [9, 8, 5, 9, 5, 8, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Huzzam',
    steps: [5, 9, 6, 11, 5, 9, 4, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Mustear',
    steps: [9, 5, 8, 9, 5, 9, 4, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Maye (Yeni Maye)',
    steps: [5, 9, 8, 1, 4, 9, 9, 8],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Vechi Arazbar',
    steps: [1, 4, 9, 8, 5, 9, 9, 3, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Nisabur',
    steps: [8, 5, 9, 4, 9, 9, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Cargah I',
    steps: [5, 13, 4, 9, 5, 12, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Cargah II',
    steps: [9, 9, 4, 9, 9, 9, 4],
    aliases: ['Zavil', 'Dastgah-e Mahur', 'Fifty-three tone Major']
  },
  {
    edo: 53,
    name: 'Makam Araban',
    steps: [5, 8, 13, 5, 5, 8, 4, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Urmawi',
    steps: [9, 8, 5, 9, 9, 5, 8],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Rengidil',
    steps: [9, 4, 13, 5, 4, 13, 5],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Arak',
    steps: [5, 9, 8, 5, 9, 9, 8],
    aliases: []
  },
  {
    edo: 53,
    name: 'Makam Necid Huseyni',
    steps: [7, 1, 5, 9, 9, 4, 9, 9],
    aliases: ['Huzi']
  },
  {
    edo: 53,
    name: 'Dastgah-e Shur',
    steps: [6, 7, 9, 9, 4, 9, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Shur',
    steps: [6, 7, 9, 6, 3, 4, 2, 7, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Abuata',
    steps: [6, 7, 9, 9, 4, 2, 7, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Dashti',
    steps: [4, 2, 7, 9, 6, 3, 4, 2, 7, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Bayat-e Tork',
    steps: [6, 3, 9, 4, 9, 9, 6, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Afshari',
    steps: [9, 6, 7, 9, 6, 3, 4, 2, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Homayun',
    steps: [6, 12, 4, 9, 4, 2, 7, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Mahur',
    steps: [9, 9, 4, 9, 9, 4, 5, 4],
    aliases: ['Rast (Rast Panjgah)']
  },
  {
    edo: 53,
    name: 'Naghmeh Abuata',
    steps: [6, 9, 10, 3, 9, 9, 7],
    aliases: ['Naghmeh Afshari']
  },
  {
    edo: 53,
    name: 'Naghmeh Bayat-e Tork',
    steps: [9, 9, 4, 9, 9, 6, 7],
    aliases: ['Naghmeh Dashti']
  },
  {
    edo: 53,
    name: 'Naghmeh Esfahan',
    steps: [9, 4, 9, 9, 6, 12, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Sehgah',
    steps: [9, 6, 7, 9, 6, 7, 9],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Sehgah',
    steps: [6, 9, 7, 6, 9, 9, 7],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Mokhalif',
    steps: [9, 4, 9, 9, 6, 9, 7],
    aliases: ['Bayat-e Esfahan']
  },
  {
    edo: 53,
    name: 'Dastgah-e Chahargah',
    steps: [6, 12, 4, 9, 6, 12, 4],
    aliases: []
  },
  {
    edo: 53,
    name: 'Dastgah-e Nava',
    steps: [9, 4, 9, 9, 6, 7, 9],
    aliases: []
  },
  {
    edo: 54,
    name: 'Astrology-6',
    steps: [10, 7, 10, 10, 7, 10],
    aliases: []
  },
  {
    edo: 54,
    name: 'Astrology-10',
    steps: [7, 3, 7, 7, 3, 7, 3, 7, 7, 3],
    aliases: []
  },
  {
    edo: 54,
    name: 'August-12',
    steps: [3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5],
    aliases: []
  },
  {
    edo: 54,
    name: 'Decibel-6',
    steps: [5, 11, 11, 5, 11, 11],
    aliases: []
  },
  {
    edo: 54,
    name: 'Decibel-10',
    steps: [5, 6, 5, 6, 5, 5, 6, 5, 6, 5],
    aliases: []
  },
  {
    edo: 54,
    name: 'Greeley-8',
    steps: [5, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 54,
    name: 'Greeley-15',
    steps: [5, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 54,
    name: 'Hexe-12',
    steps: [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 54,
    name: 'Muggles-13',
    steps: [3, 3, 8, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3],
    aliases: []
  },
  {
    edo: 54,
    name: 'Pajara-10',
    steps: [5, 5, 5, 7, 5, 5, 5, 5, 7, 5],
    aliases: []
  },
  {
    edo: 54,
    name: 'Pajara-12',
    steps: [5, 5, 5, 2, 5, 5, 5, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 54,
    name: 'Triforce-9',
    steps: [7, 7, 4, 7, 7, 4, 7, 7, 4],
    aliases: []
  },
  {
    edo: 54,
    name: 'Triforce-15',
    steps: [3, 4, 3, 4, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 54,
    name: 'Pentachordal Decatonic',
    steps: [7, 5, 5, 5, 7, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Meantone Chromatic (3/17-comma)',
    steps: [4, 5, 5, 4, 5, 4, 5, 4, 5, 5, 4, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Sauveur\'s Musician\'s System',
    steps: [5, 4, 5, 4, 5, 5, 4, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Genus diatonico-chromaticum',
    steps: [5, 4, 5, 4, 5, 4, 5, 5, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Fifty-five tone Major',
    steps: [9, 9, 5, 9, 9, 9, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Fifty-five tone Natural Minor',
    steps: [9, 5, 9, 9, 5, 9, 9],
    aliases: []
  },
  {
    edo: 55,
    name: 'Fifty-five tone Melodic Minor',
    steps: [9, 5, 9, 9, 9, 9, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Fifty-five tone Harmonic Minor',
    steps: [9, 5, 9, 9, 5, 13, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Fifty-five tone Harmonic Major',
    steps: [9, 9, 5, 9, 5, 13, 5],
    aliases: []
  },
  {
    edo: 55,
    name: 'Archytas Clan-10',
    steps: [7, 4, 7, 4, 7, 4, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 55,
    name: 'Archytas Clan-15',
    steps: [3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 55,
    name: 'Armodue-7',
    steps: [7, 10, 7, 7, 7, 10, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Armodue-9',
    steps: [7, 7, 7, 3, 7, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 55,
    name: 'Blackwood-10',
    steps: [4, 7, 4, 7, 4, 7, 4, 7, 4, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Blackwood-15',
    steps: [4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 55,
    name: 'Liese-5',
    steps: [3, 23, 3, 3, 23],
    aliases: []
  },
  {
    edo: 55,
    name: 'Liese-7',
    steps: [3, 3, 20, 3, 3, 3, 20],
    aliases: []
  },
  {
    edo: 55,
    name: 'Liese-9',
    steps: [3, 3, 3, 17, 3, 3, 3, 3, 17],
    aliases: []
  },
  {
    edo: 55,
    name: 'Liese-11',
    steps: [3, 3, 3, 3, 14, 3, 3, 3, 3, 3, 14],
    aliases: []
  },
  {
    edo: 55,
    name: 'Mavila-7',
    steps: [7, 10, 7, 7, 10, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Mavila-9',
    steps: [7, 3, 7, 7, 7, 3, 7, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Migration-10',
    steps: [2, 7, 7, 2, 7, 7, 2, 7, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Mohajira-7',
    steps: [9, 7, 9, 7, 9, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Mohajira-10',
    steps: [2, 7, 7, 2, 7, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Octacot-14',
    steps: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    aliases: []
  },
  {
    edo: 55,
    name: 'Superpelog-9',
    steps: [5, 7, 5, 7, 5, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Superpelog-14',
    steps: [5, 5, 2, 5, 5, 2, 5, 5, 2, 5, 5, 2, 5, 2],
    aliases: []
  },
  {
    edo: 55,
    name: 'Tetracot-7',
    steps: [8, 8, 8, 8, 8, 8, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Tetracot-13',
    steps: [1, 7, 1, 7, 1, 7, 1, 7, 7, 1, 7, 1, 7],
    aliases: []
  },
  {
    edo: 55,
    name: 'Twothirdtonic-9',
    steps: [6, 6, 6, 7, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 55,
    name: 'Twothirdtonic-10',
    steps: [6, 6, 6, 6, 1, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 56,
    name: 'Diminished',
    steps: [9, 5, 9, 5, 9, 5, 9, 5],
    aliases: []
  },
  {
    edo: 56,
    name: 'Octatonic',
    steps: [5, 9, 5, 9, 5, 9, 5, 9],
    aliases: []
  },
  {
    edo: 56,
    name: 'Pentachordal Decatonic',
    steps: [8, 5, 5, 5, 8, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 56,
    name: 'Bidia-12',
    steps: [4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 56,
    name: 'Diminished-12',
    steps: [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4],
    aliases: []
  },
  {
    edo: 56,
    name: 'Echidnic-10',
    steps: [5, 6, 6, 5, 6, 5, 6, 6, 5, 6],
    aliases: []
  },
  {
    edo: 56,
    name: 'Greenwood-14',
    steps: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 56,
    name: 'Leantone-6',
    steps: [9, 9, 9, 9, 9, 11],
    aliases: ['Hemithirds-6']
  },
  {
    edo: 56,
    name: 'Leantone-7',
    steps: [9, 9, 9, 9, 9, 9, 2],
    aliases: ['Hemithirds-7']
  },
  {
    edo: 56,
    name: 'Leantone-13',
    steps: [7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2, 2],
    aliases: ['Hemithirds-13']
  },
  {
    edo: 56,
    name: 'Pajara-10',
    steps: [5, 5, 5, 8, 5, 5, 5, 5, 8, 5],
    aliases: []
  },
  {
    edo: 56,
    name: 'Pajara-12',
    steps: [5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 56,
    name: 'Superkleismic-7',
    steps: [11, 4, 11, 4, 11, 4, 11],
    aliases: []
  },
  {
    edo: 56,
    name: 'Superkleismic-11',
    steps: [4, 7, 4, 7, 4, 4, 7, 4, 4, 7, 4],
    aliases: []
  },
  {
    edo: 56,
    name: 'Superkleismic-15',
    steps: [3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4],
    aliases: []
  },
  {
    edo: 56,
    name: 'Supra-5',
    steps: [13, 10, 10, 13, 10],
    aliases: []
  },
  {
    edo: 56,
    name: 'Supra-7',
    steps: [10, 3, 10, 10, 10, 3, 10],
    aliases: []
  },
  {
    edo: 56,
    name: 'Supra-12',
    steps: [3, 7, 3, 7, 3, 3, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 57,
    name: 'Armodue-9',
    steps: [7, 7, 7, 4, 7, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augene-9',
    steps: [4, 11, 4, 4, 11, 4, 4, 11, 4],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augene-12',
    steps: [4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augene-15',
    steps: [4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augment-6',
    steps: [8, 11, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augment-9',
    steps: [8, 3, 8, 8, 3, 8, 8, 3, 8],
    aliases: []
  },
  {
    edo: 57,
    name: 'Augment-15',
    steps: [3, 5, 3, 5, 3, 3, 5, 3, 5, 3, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 57,
    name: 'August-12',
    steps: [4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5],
    aliases: []
  },
  {
    edo: 57,
    name: 'Bossier-11',
    steps: [3, 3, 3, 11, 3, 3, 3, 11, 3, 3, 11],
    aliases: []
  },
  {
    edo: 57,
    name: 'Bossier-14',
    steps: [3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 8, 3],
    aliases: []
  },
  {
    edo: 57,
    name: 'Gjaeck-13',
    steps: [4, 4, 5, 4, 4, 5, 4, 5, 4, 4, 5, 4, 5],
    aliases: []
  },
  {
    edo: 57,
    name: 'Hemismate-11',
    steps: [7, 3, 7, 3, 7, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 57,
    name: 'Quasi-equal Pentatonic',
    steps: [11, 11, 13, 11, 11],
    aliases: ['Mothra-5']
  },
  {
    edo: 57,
    name: 'Mothra-6',
    steps: [11, 11, 11, 11, 11, 2],
    aliases: []
  },
  {
    edo: 57,
    name: 'Mothra-11',
    steps: [9, 2, 9, 2, 9, 2, 9, 2, 9, 2, 2],
    aliases: []
  },
  {
    edo: 57,
    name: 'Semisept-13',
    steps: [5, 4, 5, 4, 4, 5, 4, 5, 4, 4, 5, 4, 4],
    aliases: []
  },
  {
    edo: 57,
    name: 'Sharp-7',
    steps: [11, 6, 11, 6, 11, 6, 6],
    aliases: []
  },
  {
    edo: 57,
    name: 'Sharp-10',
    steps: [5, 6, 6, 6, 5, 6, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 57,
    name: 'Silver-10',
    steps: [6, 6, 6, 5, 6, 6, 5, 6, 6, 5],
    aliases: []
  },
  {
    edo: 58,
    name: '"Just" Chromatic',
    steps: [5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5],
    aliases: []
  },
  {
    edo: 58,
    name: 'Anguirus-10',
    steps: [5, 5, 7, 5, 7, 5, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Anguirus-14',
    steps: [5, 2, 5, 5, 2, 5, 5, 5, 2, 5, 5, 2, 5, 5],
    aliases: []
  },
  {
    edo: 58,
    name: 'Archchro',
    steps: [3, 7, 14, 10, 3, 7, 14],
    aliases: []
  },
  {
    edo: 58,
    name: 'Beatles-7',
    steps: [10, 7, 7, 10, 7, 10, 7],
    aliases: ['Dichotic-7']
  },
  {
    edo: 58,
    name: 'Beatles-10',
    steps: [3, 7, 7, 7, 3, 7, 7, 3, 7, 7],
    aliases: ['Dichotic-10']
  },
  {
    edo: 58,
    name: 'Diaschismic-10',
    steps: [5, 5, 5, 9, 5, 5, 5, 5, 9, 5],
    aliases: []
  },
  {
    edo: 58,
    name: 'Diaschismic-12',
    steps: [5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 58,
    name: 'Gorgo-6',
    steps: [11, 11, 3, 11, 11, 11],
    aliases: []
  },
  {
    edo: 58,
    name: 'Gorgo-11',
    steps: [3, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3],
    aliases: []
  },
  {
    edo: 58,
    name: 'Hedgehog-8',
    steps: [5, 8, 8, 8, 5, 8, 8, 8],
    aliases: []
  },
  {
    edo: 58,
    name: 'Hedgehog-14',
    steps: [5, 3, 5, 5, 3, 5, 3, 5, 3, 5, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 58,
    name: 'Hemififths-10',
    steps: [3, 7, 7, 3, 7, 7, 3, 7, 7, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Laz-13',
    steps: [6, 1, 6, 6, 1, 6, 6, 1, 6, 6, 6, 1, 6],
    aliases: []
  },
  {
    edo: 58,
    name: 'Lemba-6',
    steps: [11, 7, 11, 11, 7, 11],
    aliases: []
  },
  {
    edo: 58,
    name: 'Lemba-10',
    steps: [7, 4, 7, 4, 7, 7, 4, 7, 4, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Maqamic-7',
    steps: [7, 10, 7, 10, 7, 10, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Maqamic-10',
    steps: [7, 3, 7, 7, 3, 7, 7, 7, 3, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Mohajira-7',
    steps: [10, 7, 10, 7, 10, 7, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Mohajira-10',
    steps: [3, 7, 7, 3, 7, 7, 7, 3, 7, 7],
    aliases: []
  },
  {
    edo: 58,
    name: 'Myna-7',
    steps: [13, 2, 13, 2, 13, 2, 13],
    aliases: []
  },
  {
    edo: 58,
    name: 'Myna-11',
    steps: [2, 11, 2, 2, 11, 2, 11, 2, 2, 11, 2],
    aliases: []
  },
  {
    edo: 58,
    name: 'Myna-15',
    steps: [2, 2, 9, 2, 2, 2, 9, 2, 2, 2, 9, 2, 2, 9, 2],
    aliases: []
  },
  {
    edo: 58,
    name: 'Ripple-12',
    steps: [5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 58,
    name: 'Secant-14',
    steps: [7, 2, 7, 2, 7, 2, 2, 7, 2, 7, 2, 7, 2, 2],
    aliases: []
  },
  {
    edo: 58,
    name: 'Starling-12',
    steps: [4, 7, 4, 4, 5, 6, 4, 5, 4, 6, 5, 4],
    aliases: []
  },
  {
    edo: 58,
    name: 'Thuja-13',
    steps: [7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 58,
    name: 'Thuja-15',
    steps: [3, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 58,
    name: 'Urchin-14',
    steps: [5, 5, 3, 5, 3, 5, 3, 5, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 59,
    name: 'Mavila-7',
    steps: [7, 12, 7, 7, 7, 12, 7],
    aliases: []
  },
  {
    edo: 59,
    name: 'Mavila-9',
    steps: [7, 7, 5, 7, 7, 7, 7, 5, 7],
    aliases: []
  },
  {
    edo: 59,
    name: 'Nautilus-14',
    steps: [4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 59,
    name: 'Opossum-15',
    steps: [3, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5],
    aliases: []
  },
  {
    edo: 59,
    name: 'Oregon-15',
    steps: [5, 5, 1, 5, 5, 5, 1, 5, 5, 1, 5, 5, 5, 1, 5],
    aliases: []
  },
  {
    edo: 59,
    name: 'Porcupine-7',
    steps: [8, 8, 8, 11, 8, 8, 8],
    aliases: []
  },
  {
    edo: 59,
    name: 'Porcupine-7 Major',
    steps: [8, 11, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 59,
    name: 'Porcupine-8',
    steps: [8, 8, 8, 8, 8, 8, 8, 3],
    aliases: []
  },
  {
    edo: 59,
    name: 'Porcupine-15',
    steps: [5, 3, 5, 3, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 59,
    name: 'Pseudo-semaphore-9',
    steps: [11, 11, 1, 11, 1, 11, 1, 11, 1],
    aliases: []
  },
  {
    edo: 59,
    name: 'Ripple-12',
    steps: [5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 59,
    name: 'Subklei-13',
    steps: [3, 3, 8, 3, 3, 8, 3, 3, 8, 3, 3, 3, 8],
    aliases: []
  },
  {
    edo: 60,
    name: '"Just" Chromatic',
    steps: [6, 4, 6, 3, 6, 4, 6, 6, 3, 6, 4, 6],
    aliases: []
  },
  {
    edo: 60,
    name: 'First 5 equal temperaments mixed',
    steps: [12, 3, 5, 4, 6, 6, 4, 5, 3, 12],
    aliases: []
  },
  {
    edo: 60,
    name: 'First 6 equal temperaments mixed',
    steps: [10, 2, 3, 5, 4, 6, 6, 4, 5, 3, 2, 10],
    aliases: []
  },
  {
    edo: 60,
    name: 'Octatonic',
    steps: [4, 11, 4, 11, 4, 11, 4, 11],
    aliases: []
  },
  {
    edo: 60,
    name: 'Quasi-equal Octatonic',
    steps: [7, 8, 7, 8, 7, 8, 7, 8],
    aliases: []
  },
  {
    edo: 60,
    name: 'Amity-7',
    steps: [9, 8, 9, 8, 9, 9, 8],
    aliases: []
  },
  {
    edo: 60,
    name: 'Astrology-6',
    steps: [11, 8, 11, 11, 8, 11],
    aliases: []
  },
  {
    edo: 60,
    name: 'Astrology-10',
    steps: [8, 3, 8, 8, 3, 8, 3, 8, 8, 3],
    aliases: []
  },
  {
    edo: 60,
    name: 'Blacksmith-10',
    steps: [5, 7, 5, 7, 5, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 60,
    name: 'Blacksmith-15',
    steps: [5, 2, 5, 5, 2, 5, 5, 2, 5, 5, 2, 5, 5, 2, 5],
    aliases: []
  },
  {
    edo: 60,
    name: 'Bleu-9',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 60,
    name: 'Dicot-7',
    steps: [8, 9, 9, 8, 9, 8, 9],
    aliases: []
  },
  {
    edo: 60,
    name: 'Hemiamity-14',
    steps: [5, 4, 4, 5, 4, 4, 4, 5, 4, 4, 5, 4, 4, 4],
    aliases: []
  },
  {
    edo: 60,
    name: 'Magic-7',
    steps: [16, 3, 16, 3, 3, 16, 3],
    aliases: []
  },
  {
    edo: 60,
    name: 'Magic-10',
    steps: [13, 3, 3, 3, 13, 3, 3, 13, 3, 3],
    aliases: []
  },
  {
    edo: 60,
    name: 'Magic-13',
    steps: [10, 3, 3, 3, 10, 3, 3, 3, 10, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 60,
    name: 'Superpelog-9',
    steps: [5, 8, 5, 8, 5, 8, 5, 8, 8],
    aliases: []
  },
  {
    edo: 60,
    name: 'Superpelog-14',
    steps: [5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 3],
    aliases: []
  },
  {
    edo: 61,
    name: 'Twelve-tone Chromatic (7/24-comma positive)',
    steps: [8, 3, 3, 8, 3, 8, 3, 8, 3, 3, 8, 3],
    aliases: ['Suprapyth-12']
  },
  {
    edo: 61,
    name: 'Bleu-9',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 5],
    aliases: []
  },
  {
    edo: 61,
    name: 'Dichotic-7',
    steps: [11, 7, 7, 11, 7, 11, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Dichotic-10',
    steps: [4, 7, 7, 7, 4, 7, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Freivald-11',
    steps: [8, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 61,
    name: 'Freivald-13',
    steps: [3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 61,
    name: 'Laquadgu-13',
    steps: [9, 2, 9, 2, 2, 9, 2, 9, 2, 2, 9, 2, 2],
    aliases: []
  },
  {
    edo: 61,
    name: 'Machine-6',
    steps: [11, 11, 6, 11, 11, 11],
    aliases: []
  },
  {
    edo: 61,
    name: 'Machine-11',
    steps: [6, 5, 6, 5, 6, 5, 6, 5, 6, 6, 5],
    aliases: []
  },
  {
    edo: 61,
    name: 'Miraculous-10',
    steps: [6, 6, 6, 6, 6, 6, 6, 6, 6, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Parizek-11',
    steps: [5, 5, 5, 5, 8, 5, 5, 5, 5, 5, 8],
    aliases: []
  },
  {
    edo: 61,
    name: 'Parizek-13',
    steps: [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 61,
    name: 'Passion-12',
    steps: [5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 61,
    name: 'Quasisuper-12',
    steps: [3, 3, 8, 3, 8, 3, 8, 3, 3, 8, 3, 8],
    aliases: []
  },
  {
    edo: 61,
    name: 'Suhajira-7',
    steps: [11, 7, 11, 7, 11, 7, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Suhajira-10',
    steps: [7, 4, 7, 7, 4, 7, 7, 7, 4, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Supra-12',
    steps: [3, 8, 3, 8, 3, 3, 8, 3, 8, 3, 8, 3],
    aliases: []
  },
  {
    edo: 61,
    name: 'Tetracot-7',
    steps: [9, 9, 9, 9, 9, 9, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Tetracot-13',
    steps: [2, 7, 2, 7, 2, 7, 2, 7, 7, 2, 7, 2, 7],
    aliases: []
  },
  {
    edo: 61,
    name: 'Screamapillar',
    steps: [11, 11, 7, 7, 11, 11, 3],
    aliases: []
  },
  {
    edo: 62,
    name: 'Armodue-9',
    steps: [8, 8, 8, 3, 8, 8, 8, 8, 3],
    aliases: []
  },
  {
    edo: 62,
    name: 'Decimal-10',
    steps: [5, 8, 5, 8, 5, 5, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 62,
    name: 'Godzilla-5',
    steps: [10, 13, 13, 13, 13],
    aliases: []
  },
  {
    edo: 62,
    name: 'Godzilla-9',
    steps: [10, 10, 3, 10, 3, 10, 3, 10, 3],
    aliases: []
  },
  {
    edo: 62,
    name: 'Godzilla-14',
    steps: [7, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3],
    aliases: []
  },
  {
    edo: 62,
    name: 'Injera-12',
    steps: [5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 6],
    aliases: []
  },
  {
    edo: 62,
    name: 'Injera-14',
    steps: [5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1],
    aliases: []
  },
  {
    edo: 62,
    name: 'Kangaroo-13',
    steps: [9, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 62,
    name: 'Lemba-6',
    steps: [12, 7, 12, 12, 7, 12],
    aliases: []
  },
  {
    edo: 62,
    name: 'Lemba-10',
    steps: [7, 5, 7, 5, 7, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 62,
    name: 'Mavila-7',
    steps: [8, 11, 8, 8, 11, 8, 8],
    aliases: []
  },
  {
    edo: 62,
    name: 'Mavila-9',
    steps: [8, 3, 8, 8, 8, 3, 8, 8, 8],
    aliases: []
  },
  {
    edo: 62,
    name: 'Progress-15',
    steps: [4, 5, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 62,
    name: 'Semimiracle-12',
    steps: [6, 6, 6, 1, 6, 6, 6, 6, 6, 1, 6, 6],
    aliases: []
  },
  {
    edo: 63,
    name: 'Twelve-tone Chromatic (1/8-comma positive)',
    steps: [7, 4, 4, 7, 4, 7, 4, 7, 4, 4, 7, 4],
    aliases: ['Leapfrog-12']
  },
  {
    edo: 63,
    name: '"Just" Chromatic',
    steps: [6, 5, 6, 3, 6, 5, 6, 6, 3, 6, 5, 6],
    aliases: []
  },
  {
    edo: 63,
    name: 'Immunity-5',
    steps: [11, 13, 13, 13, 13],
    aliases: []
  },
  {
    edo: 63,
    name: 'Immunity-9',
    steps: [11, 11, 2, 11, 2, 11, 2, 11, 2],
    aliases: []
  },
  {
    edo: 63,
    name: 'Immunity-14',
    steps: [2, 2, 9, 2, 2, 9, 2, 9, 2, 2, 9, 2, 2, 9],
    aliases: []
  },
  {
    edo: 63,
    name: 'Inflated-12',
    steps: [9, 4, 4, 4, 9, 4, 4, 4, 9, 4, 4, 4],
    aliases: []
  },
  {
    edo: 63,
    name: 'Inflated-15',
    steps: [4, 5, 4, 4, 4, 4, 5, 4, 4, 4, 4, 5, 4, 4, 4],
    aliases: []
  },
  {
    edo: 63,
    name: 'Magic-7',
    steps: [17, 3, 17, 3, 17, 3, 3],
    aliases: []
  },
  {
    edo: 63,
    name: 'Magic-10',
    steps: [14, 3, 3, 3, 14, 3, 3, 14, 3, 3],
    aliases: []
  },
  {
    edo: 63,
    name: 'Magic-13',
    steps: [11, 3, 3, 3, 11, 3, 3, 3, 11, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 63,
    name: 'Orgone-7',
    steps: [5, 12, 12, 5, 12, 5, 12],
    aliases: []
  },
  {
    edo: 63,
    name: 'Orgone-11',
    steps: [5, 5, 7, 5, 7, 5, 5, 7, 5, 5, 7],
    aliases: []
  },
  {
    edo: 63,
    name: 'Orgone-15',
    steps: [5, 5, 5, 2, 5, 5, 2, 5, 5, 5, 2, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 63,
    name: 'Septimal-14',
    steps: [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 63,
    name: 'Spell-7',
    steps: [10, 10, 10, 10, 10, 10, 3],
    aliases: []
  },
  {
    edo: 63,
    name: 'Spell-13',
    steps: [7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 3],
    aliases: []
  },
  {
    edo: 63,
    name: 'Submajor-10',
    steps: [7, 6, 6, 7, 6, 6, 7, 6, 6, 6],
    aliases: []
  },
  {
    edo: 63,
    name: 'Triforce-9',
    steps: [8, 8, 5, 8, 8, 5, 8, 8, 5],
    aliases: []
  },
  {
    edo: 63,
    name: 'Triforce-15',
    steps: [3, 5, 3, 5, 5, 3, 5, 3, 5, 5, 3, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 64,
    name: 'Meantone Chromatic (8/21-comma)',
    steps: [3, 7, 7, 3, 7, 3, 7, 3, 7, 7, 3, 7],
    aliases: []
  },
  {
    edo: 64,
    name: 'Chrysanthos Soft Chromatic Byzantine mode',
    steps: [7, 12, 7, 12, 7, 12, 7],
    aliases: []
  },
  {
    edo: 64,
    name: 'Diminished',
    steps: [11, 5, 11, 5, 11, 5, 11, 5],
    aliases: []
  },
  {
    edo: 64,
    name: 'Octatonic',
    steps: [5, 11, 5, 11, 5, 11, 5, 11],
    aliases: []
  },
  {
    edo: 64,
    name: 'Quasi-equal Octatonic',
    steps: [7, 9, 7, 9, 7, 9, 7, 9],
    aliases: []
  },
  {
    edo: 64,
    name: 'Decimal-10',
    steps: [6, 7, 6, 7, 6, 6, 7, 6, 7, 6],
    aliases: []
  },
  {
    edo: 64,
    name: 'Beatles-7',
    steps: [12, 7, 7, 12, 7, 12, 7],
    aliases: ['Dichotic-7']
  },
  {
    edo: 64,
    name: 'Beatles-10',
    steps: [5, 7, 7, 7, 5, 7, 7, 5, 7, 7],
    aliases: ['Dichotic-10']
  },
  {
    edo: 64,
    name: 'Flattone-12',
    steps: [3, 7, 7, 3, 7, 3, 7, 7, 3, 7, 3, 7],
    aliases: []
  },
  {
    edo: 64,
    name: 'Injera-12',
    steps: [5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 7],
    aliases: []
  },
  {
    edo: 64,
    name: 'Injera-14',
    steps: [5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 2],
    aliases: []
  },
  {
    edo: 64,
    name: 'Kleismic-7',
    steps: [4, 13, 4, 13, 4, 13, 13],
    aliases: []
  },
  {
    edo: 64,
    name: 'Kleismic-11',
    steps: [4, 4, 9, 4, 9, 4, 4, 9, 4, 4, 9],
    aliases: []
  },
  {
    edo: 64,
    name: 'Pseudo-semaphore-9',
    steps: [12, 12, 1, 12, 1, 12, 1, 12, 1],
    aliases: []
  },
  {
    edo: 64,
    name: 'Sharp-7',
    steps: [12, 7, 12, 7, 12, 7, 7],
    aliases: []
  },
  {
    edo: 64,
    name: 'Sharp-10',
    steps: [5, 7, 7, 7, 5, 7, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 65,
    name: 'Meantone Chromatic (1/52-comma)',
    steps: [6, 5, 5, 6, 5, 6, 5, 6, 5, 5, 6, 5],
    aliases: []
  },
  {
    edo: 65,
    name: '"Just" Chromatic',
    steps: [6, 5, 6, 4, 6, 5, 6, 6, 4, 6, 5, 6],
    aliases: []
  },
  {
    edo: 65,
    name: 'Sixty-five tone "Just" Major',
    steps: [11, 10, 6, 11, 10, 11, 6],
    aliases: []
  },
  {
    edo: 65,
    name: 'Sixty-five tone "Just" Minor',
    steps: [11, 6, 10, 11, 6, 11, 10],
    aliases: []
  },
  {
    edo: 65,
    name: 'Maqamic-7',
    steps: [8, 11, 8, 11, 8, 11, 8],
    aliases: []
  },
  {
    edo: 65,
    name: 'Maqamic-10',
    steps: [8, 3, 8, 8, 3, 8, 8, 8, 3, 8],
    aliases: []
  },
  {
    edo: 65,
    name: 'Mohajira-7',
    steps: [11, 8, 11, 8, 11, 8, 8],
    aliases: []
  },
  {
    edo: 65,
    name: 'Mohajira-10',
    steps: [3, 8, 8, 3, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 65,
    name: 'Porky-7',
    steps: [11, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 65,
    name: 'Sensi-8',
    steps: [7, 7, 10, 7, 7, 10, 7, 10],
    aliases: []
  },
  {
    edo: 65,
    name: 'Sensi-11',
    steps: [7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 3],
    aliases: []
  },
  {
    edo: 65,
    name: 'Slurpee-15',
    steps: [9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 65,
    name: 'Starling-12',
    steps: [4, 9, 4, 4, 6, 7, 4, 6, 4, 7, 6, 4],
    aliases: []
  },
  {
    edo: 65,
    name: 'Superpelog-9',
    steps: [5, 9, 5, 9, 5, 9, 5, 9, 9],
    aliases: []
  },
  {
    edo: 65,
    name: 'Superpelog-14',
    steps: [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 4],
    aliases: []
  },
  {
    edo: 65,
    name: 'Trisedodge-10',
    steps: [4, 9, 4, 9, 4, 9, 4, 9, 4, 9],
    aliases: []
  },
  {
    edo: 65,
    name: 'Trisedodge-15',
    steps: [4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5],
    aliases: []
  },
  {
    edo: 65,
    name: 'Wurschmidt-13',
    steps: [15, 2, 2, 2, 15, 2, 2, 2, 15, 2, 2, 2, 2],
    aliases: []
  },
  {
    edo: 66,
    name: 'Armodue-9',
    steps: [8, 8, 8, 5, 8, 8, 8, 8, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Augene-6',
    steps: [17, 5, 17, 5, 17, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Augene-9',
    steps: [5, 12, 5, 5, 12, 5, 5, 12, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Augene-12',
    steps: [5, 5, 7, 5, 5, 5, 7, 5, 5, 5, 7, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Augene-15',
    steps: [5, 5, 5, 2, 5, 5, 5, 5, 2, 5, 5, 5, 5, 2, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Decimal-10',
    steps: [5, 9, 5, 9, 5, 5, 9, 5, 9, 5],
    aliases: []
  },
  {
    edo: 66,
    name: 'Injera-12',
    steps: [5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5, 8],
    aliases: []
  },
  {
    edo: 66,
    name: 'Injera-14',
    steps: [5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 66,
    name: 'Mabila-7',
    steps: [8, 13, 8, 8, 8, 13, 8],
    aliases: []
  },
  {
    edo: 66,
    name: 'Mabila-9',
    steps: [8, 8, 5, 8, 8, 8, 8, 5, 8],
    aliases: []
  },
  {
    edo: 66,
    name: 'Negri-9',
    steps: [7, 7, 7, 7, 10, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 66,
    name: 'Negri-10',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 66,
    name: 'Tridec-8',
    steps: [9, 7, 9, 7, 9, 9, 7, 9],
    aliases: []
  },
  {
    edo: 66,
    name: 'Vishnu-14',
    steps: [9, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 67,
    name: 'Meantone Chromatic (4/25-comma)',
    steps: [5, 6, 6, 5, 6, 5, 6, 5, 6, 6, 5, 6],
    aliases: []
  },
  {
    edo: 67,
    name: 'Mavila-7',
    steps: [9, 11, 9, 9, 11, 9, 9],
    aliases: []
  },
  {
    edo: 67,
    name: 'Mavila-9',
    steps: [9, 2, 9, 9, 9, 2, 9, 9, 9],
    aliases: []
  },
  {
    edo: 67,
    name: 'Quasi-equal Pentatonic',
    steps: [13, 13, 15, 13, 13],
    aliases: ['Mosura-5']
  },
  {
    edo: 67,
    name: 'Mosura-11',
    steps: [11, 2, 11, 2, 11, 2, 11, 2, 11, 2, 2],
    aliases: []
  },
  {
    edo: 67,
    name: 'Negri-9',
    steps: [7, 7, 7, 7, 11, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 67,
    name: 'Negri-10',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 67,
    name: 'Semisept-13',
    steps: [7, 4, 7, 4, 4, 7, 4, 7, 4, 4, 7, 4, 4],
    aliases: []
  },
  {
    edo: 67,
    name: 'Sharp-7',
    steps: [13, 7, 13, 7, 13, 7, 7],
    aliases: []
  },
  {
    edo: 67,
    name: 'Sharp-10',
    steps: [6, 7, 7, 7, 6, 7, 7, 6, 7, 7],
    aliases: []
  },
  {
    edo: 67,
    name: 'Superkleismic-11',
    steps: [5, 8, 5, 8, 5, 5, 8, 5, 5, 8, 5],
    aliases: []
  },
  {
    edo: 67,
    name: 'Superkleismic-15',
    steps: [3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos 1st Byzantine Liturgical mode',
    steps: [9, 7, 12, 12, 9, 7, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos 3rd Byzantine Liturgical mode',
    steps: [12, 13, 3, 12, 12, 5, 11],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos 4th Byzantine Liturgical mode',
    steps: [12, 9, 7, 12, 9, 7, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos Hard Chromatic 2nd plagal Byzantine mode',
    steps: [7, 18, 3, 12, 7, 18, 3],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos Hard Chromatic/Diatonic Byzantine mode',
    steps: [7, 18, 3, 12, 9, 7, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos Diatonic-Enharmonic Byzantine mode',
    steps: [9, 7, 12, 12, 3, 13, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Chrysanthos Enharmonic-Diatonic Byzantine mode',
    steps: [13, 12, 3, 12, 9, 7, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Fokaeas 2nd plagal Byzantine Liturgical mode',
    steps: [9, 7, 12, 7, 18, 3, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Konstantinos 3rd Byzantine Liturgical mode',
    steps: [12, 9, 7, 12, 12, 3, 13],
    aliases: []
  },
  {
    edo: 68,
    name: 'Konstantinos 4th plagal Byzantine Liturgical mode',
    steps: [12, 4, 12, 9, 7, 12, 12],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tiby 1st Byzantine Liturgical mode',
    steps: [12, 13, 3, 12, 12, 13, 3],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tiby 2nd Byzantine Liturgical mode',
    steps: [12, 5, 11, 12, 12, 5, 11],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tiby 4th Byzantine Liturgical mode',
    steps: [9, 12, 7, 12, 9, 12, 7],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tsiknopoulos 2nd Byzantine Liturgical mode',
    steps: [7, 14, 7, 12, 7, 14, 7],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tsiknopoulos 4th Byzantine Liturgical mode',
    steps: [7, 12, 12, 9, 7, 12, 9],
    aliases: []
  },
  {
    edo: 68,
    name: 'Tsiknopoulos 4th plagal Byzantine Liturgical mode',
    steps: [12, 9, 7, 12, 12, 9, 7],
    aliases: ['Tiby 3rd Byzantine mode']
  },
  {
    edo: 68,
    name: 'Diminished',
    steps: [11, 6, 11, 6, 11, 6, 11, 6],
    aliases: []
  },
  {
    edo: 68,
    name: 'Octatonic',
    steps: [6, 11, 6, 11, 6, 11, 6, 11],
    aliases: []
  },
  {
    edo: 68,
    name: 'Bidia-12',
    steps: [5, 6, 6, 5, 6, 6, 5, 6, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 68,
    name: 'Blackbirds-12',
    steps: [3, 11, 3, 3, 11, 3, 3, 11, 3, 3, 11, 3],
    aliases: []
  },
  {
    edo: 68,
    name: 'Diminished-12',
    steps: [6, 6, 5, 6, 6, 5, 6, 6, 5, 6, 6, 5],
    aliases: []
  },
  {
    edo: 68,
    name: 'Hemikleismic-15',
    steps: [4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 68,
    name: 'Hemithirds-6',
    steps: [11, 11, 11, 11, 11, 13],
    aliases: []
  },
  {
    edo: 68,
    name: 'Hemithirds-7',
    steps: [11, 11, 11, 11, 11, 11, 2],
    aliases: []
  },
  {
    edo: 68,
    name: 'Hemithirds-13',
    steps: [9, 2, 9, 2, 9, 2, 9, 2, 9, 2, 9, 2, 2],
    aliases: []
  },
  {
    edo: 68,
    name: 'Lemba-6',
    steps: [13, 8, 13, 13, 8, 13],
    aliases: []
  },
  {
    edo: 68,
    name: 'Lemba-10',
    steps: [8, 5, 8, 5, 8, 8, 5, 8, 5, 8],
    aliases: []
  },
  {
    edo: 68,
    name: 'Negri-9',
    steps: [7, 7, 7, 7, 12, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 68,
    name: 'Negri-10',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 5],
    aliases: []
  },
  {
    edo: 68,
    name: 'Octacot-14',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3],
    aliases: []
  },
  {
    edo: 68,
    name: 'Spartan-11',
    steps: [10, 3, 10, 3, 10, 3, 10, 3, 3, 10, 3],
    aliases: []
  },
  {
    edo: 69,
    name: 'Meantone Chromatic (5/17-comma)',
    steps: [4, 7, 7, 4, 7, 4, 7, 4, 7, 7, 4, 7],
    aliases: ['Synch-Meantone-12']
  },
  {
    edo: 69,
    name: 'Augene-9',
    steps: [5, 13, 5, 5, 13, 5, 5, 13, 5],
    aliases: []
  },
  {
    edo: 69,
    name: 'Augene-12',
    steps: [5, 5, 8, 5, 5, 5, 8, 5, 5, 5, 8, 5],
    aliases: []
  },
  {
    edo: 69,
    name: 'Augene-15',
    steps: [5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5],
    aliases: []
  },
  {
    edo: 69,
    name: 'August-12',
    steps: [5, 6, 6, 6, 5, 6, 6, 6, 5, 6, 6, 6],
    aliases: []
  },
  {
    edo: 69,
    name: 'Bleu-9',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 5],
    aliases: ['Jerome-9']
  },
  {
    edo: 69,
    name: 'Mavka-11',
    steps: [6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 7],
    aliases: []
  },
  {
    edo: 69,
    name: 'Oodako-9',
    steps: [10, 10, 3, 10, 10, 3, 10, 10, 3],
    aliases: []
  },
  {
    edo: 69,
    name: 'Spell-7',
    steps: [11, 11, 11, 11, 11, 11, 3],
    aliases: []
  },
  {
    edo: 69,
    name: 'Spell-13',
    steps: [8, 3, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3, 3],
    aliases: []
  },
  {
    edo: 69,
    name: 'Triforce-9',
    steps: [9, 9, 5, 9, 9, 5, 9, 9, 5],
    aliases: []
  },
  {
    edo: 69,
    name: 'Triforce-15',
    steps: [4, 5, 4, 5, 5, 4, 5, 4, 5, 5, 4, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 70,
    name: 'Twelve-tone Chromatic (1/24-comma positive)',
    steps: [7, 5, 5, 7, 5, 7, 5, 7, 5, 5, 7, 5],
    aliases: ['Dominant-12']
  },
  {
    edo: 70,
    name: 'Jorgensen 5&7',
    steps: [3, 7, 7, 3, 10, 1, 9, 5, 5, 9, 1, 10],
    aliases: []
  },
  {
    edo: 70,
    name: 'Archytas Clan-10',
    steps: [9, 5, 9, 5, 9, 5, 9, 5, 9, 5],
    aliases: []
  },
  {
    edo: 70,
    name: 'Archytas Clan-15',
    steps: [4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5],
    aliases: []
  },
  {
    edo: 70,
    name: 'Diaschismic-10',
    steps: [6, 6, 6, 11, 6, 6, 6, 6, 11, 6],
    aliases: []
  },
  {
    edo: 70,
    name: 'Diaschismic-12',
    steps: [6, 6, 6, 5, 6, 6, 6, 6, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 70,
    name: 'Doublewide-10',
    steps: [3, 13, 3, 13, 3, 3, 13, 3, 13, 3],
    aliases: []
  },
  {
    edo: 70,
    name: 'Doublewide-14',
    steps: [3, 3, 10, 3, 3, 10, 3, 3, 3, 10, 3, 3, 10, 3],
    aliases: []
  },
  {
    edo: 70,
    name: 'Kumonga-11',
    steps: [5, 5, 8, 5, 8, 5, 8, 5, 8, 5, 8],
    aliases: []
  },
  {
    edo: 70,
    name: 'Schismic-12',
    steps: [5, 7, 5, 5, 7, 5, 7, 5, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 70,
    name: 'Whitewood-14',
    steps: [3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7],
    aliases: []
  },
  {
    edo: 71,
    name: 'Meantone Chromatic (5/13-comma)',
    steps: [3, 8, 8, 3, 8, 3, 8, 3, 8, 8, 3, 8],
    aliases: []
  },
  {
    edo: 71,
    name: 'Beatles-10',
    steps: [5, 8, 8, 8, 5, 8, 8, 5, 8, 8],
    aliases: []
  },
  {
    edo: 71,
    name: 'Flattone-12',
    steps: [3, 8, 8, 3, 8, 3, 8, 8, 3, 8, 3, 8],
    aliases: []
  },
  {
    edo: 71,
    name: 'Godzilla-5',
    steps: [11, 15, 15, 15, 15],
    aliases: []
  },
  {
    edo: 71,
    name: 'Godzilla-9',
    steps: [11, 11, 4, 11, 4, 11, 4, 11, 4],
    aliases: []
  },
  {
    edo: 71,
    name: 'Godzilla-14',
    steps: [7, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4],
    aliases: []
  },
  {
    edo: 71,
    name: 'Mechanism-8',
    steps: [7, 7, 12, 7, 7, 12, 7, 12],
    aliases: []
  },
  {
    edo: 71,
    name: 'Mechanism-11',
    steps: [7, 5, 7, 7, 7, 5, 7, 7, 7, 5, 7],
    aliases: []
  },
  {
    edo: 71,
    name: 'Ripple-12',
    steps: [6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 71,
    name: 'Stacks-11',
    steps: [7, 5, 7, 7, 7, 5, 7, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 71,
    name: 'Superpyth-12',
    steps: [3, 10, 3, 3, 10, 3, 10, 3, 3, 10, 3, 10],
    aliases: []
  },
  {
    edo: 71,
    name: 'Thuja-13',
    steps: [8, 5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 71,
    name: 'Thuja-15',
    steps: [3, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 72,
    name: '"Just" Chromatic',
    steps: [7, 5, 7, 4, 7, 5, 7, 7, 4, 7, 5, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Seventy-two tone "Just" Major',
    steps: [12, 11, 7, 12, 11, 12, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Seventy-two tone "Just" Minor',
    steps: [12, 7, 11, 12, 7, 12, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Mixolydian',
    steps: [5, 5, 20, 5, 5, 20, 12],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Lydian',
    steps: [5, 20, 5, 5, 20, 12, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Phrygian',
    steps: [20, 5, 5, 20, 12, 5, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Dorian',
    steps: [5, 5, 20, 12, 5, 5, 20],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Hypolydian',
    steps: [5, 20, 12, 5, 5, 20, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Hypophrygian',
    steps: [20, 12, 5, 5, 20, 5, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Parachromatic Hypodorian',
    steps: [12, 5, 5, 20, 5, 5, 20],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Mixolydian',
    steps: [5, 10, 15, 5, 10, 15, 12],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Lydian',
    steps: [10, 15, 5, 10, 15, 12, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Phrygian',
    steps: [15, 5, 10, 15, 12, 5, 10],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Dorian',
    steps: [5, 10, 15, 12, 5, 10, 15],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Hypolydian',
    steps: [10, 15, 12, 5, 10, 15, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Hypophrygian',
    steps: [15, 12, 5, 10, 15, 5, 10],
    aliases: []
  },
  {
    edo: 72,
    name: 'Soft Diatonic Hypodorian',
    steps: [12, 5, 10, 15, 5, 10, 15],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Mixolydian',
    steps: [9, 10, 11, 9, 10, 11, 12],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Lydian',
    steps: [10, 11, 9, 10, 11, 12, 9],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Phrygian',
    steps: [11, 9, 10, 11, 12, 9, 10],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Dorian',
    steps: [9, 10, 11, 12, 9, 10, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Hypolydian',
    steps: [10, 11, 12, 9, 10, 11, 9],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Hypophrygian',
    steps: [11, 12, 9, 10, 11, 9, 10],
    aliases: []
  },
  {
    edo: 72,
    name: 'Equable Diatonic Hypodorian',
    steps: [12, 9, 10, 11, 9, 10, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Misaelides 1st Byzantine Liturgical mode',
    steps: [11, 7, 12, 12, 11, 7, 12],
    aliases: []
  },
  {
    edo: 72,
    name: 'Misaelides 3rd Byzantine Liturgical mode',
    steps: [12, 12, 11, 7, 12, 11, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Misaelides 4th Byzantine Liturgical mode',
    steps: [7, 12, 12, 11, 7, 12, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Misaelides 1st plagal Byzantine Liturgical mode',
    steps: [11, 7, 12, 15, 3, 12, 12],
    aliases: []
  },
  {
    edo: 72,
    name: 'Misaelides 2nd plagal Byzantine Liturgical mode',
    steps: [7, 20, 3, 12, 7, 20, 3],
    aliases: []
  },
  {
    edo: 72,
    name: 'Xenakis Byzantine Liturgical Chromatic',
    steps: [5, 19, 6, 12, 5, 19, 6],
    aliases: []
  },
  {
    edo: 72,
    name: 'Xenakis Byzantine Liturgical Soft Chromatic',
    steps: [7, 16, 7, 12, 7, 16, 7],
    aliases: ['Quasi-Miracle-7']
  },
  {
    edo: 72,
    name: 'Xenakis Byzantine Liturgical Diatonic',
    steps: [12, 11, 7, 12, 12, 11, 7],
    aliases: ['Misaelides 4th plagal Byzantine']
  },
  {
    edo: 72,
    name: 'Byzantine Palace mode',
    steps: [6, 20, 4, 12, 9, 10, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Diminished',
    steps: [13, 5, 13, 5, 13, 5, 13, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Genus diatonico-chromaticum',
    steps: [7, 5, 7, 4, 7, 5, 7, 7, 4, 8, 4, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Keenanmarvel',
    steps: [16, 7, 12, 7, 16, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Three Tetrads',
    steps: [7, 12, 7, 9, 7, 7, 7, 16],
    aliases: []
  },
  {
    edo: 72,
    name: 'Blackjack-12',
    steps: [7, 7, 7, 5, 2, 5, 2, 5, 7, 7, 7, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Hexy',
    steps: [5, 7, 4, 7, 7, 5, 7, 7, 4, 5, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Smith\'s Nonatonic Prism',
    steps: [7, 9, 7, 7, 12, 7, 9, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Smith\'s Prism',
    steps: [7, 5, 4, 7, 7, 5, 7, 7, 4, 5, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Astrology-6',
    steps: [13, 10, 13, 13, 10, 13],
    aliases: []
  },
  {
    edo: 72,
    name: 'Astrology-10',
    steps: [10, 3, 10, 10, 3, 10, 3, 10, 10, 3],
    aliases: []
  },
  {
    edo: 72,
    name: 'Augene-9',
    steps: [7, 18, 7, 7, 18, 7, 7, 18, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Augene-12',
    steps: [7, 7, 11, 7, 7, 7, 11, 7, 7, 7, 11, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Augene-15',
    steps: [7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Belauensis-14',
    steps: [7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Belauensis-15',
    steps: [2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Hexe-12',
    steps: [7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'Kleismic-7',
    steps: [4, 15, 4, 15, 4, 15, 15],
    aliases: []
  },
  {
    edo: 72,
    name: 'Kleismic-11',
    steps: [4, 4, 11, 4, 11, 4, 4, 11, 4, 4, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Kleismic-15',
    steps: [4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Machine-11',
    steps: [7, 6, 7, 6, 7, 6, 7, 6, 7, 7, 6],
    aliases: []
  },
  {
    edo: 72,
    name: 'Marvel-12',
    steps: [7, 5, 7, 4, 7, 5, 7, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Marveltri-7',
    steps: [3, 20, 3, 20, 3, 3, 20],
    aliases: []
  },
  {
    edo: 72,
    name: 'Marveltri-13',
    steps: [3, 3, 14, 3, 3, 3, 14, 3, 3, 3, 14, 3, 3],
    aliases: []
  },
  {
    edo: 72,
    name: 'Miracle-10',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 9],
    aliases: []
  },
  {
    edo: 72,
    name: 'Miracle-12',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 2],
    aliases: []
  },
  {
    edo: 72,
    name: 'Prodigy-11',
    steps: [7, 7, 2, 7, 7, 12, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Quasi-Miracle-10',
    steps: [7, 9, 7, 7, 5, 7, 7, 9, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Semimiracle-12',
    steps: [7, 7, 7, 1, 7, 7, 7, 7, 7, 1, 7, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'A Carpenter\'s Olive',
    steps: [6, 4, 6, 4, 11, 6, 4, 6, 4, 6, 4, 11],
    aliases: []
  },
  {
    edo: 72,
    name: 'Hopalong',
    steps: [9, 5, 9, 5, 9, 5, 9, 2, 5, 9, 5],
    aliases: []
  },
  {
    edo: 72,
    name: 'JuneGloom',
    steps: [12, 7, 7, 5, 3, 8, 9, 10, 5, 6],
    aliases: []
  },
  {
    edo: 72,
    name: 'Rodgers Adams',
    steps: [12, 4, 7, 3, 4, 3, 9, 11, 5, 5, 2, 7],
    aliases: []
  },
  {
    edo: 72,
    name: 'Minerva-12',
    steps: [7, 7, 5, 7, 5, 6, 7, 5, 7, 5, 7, 4],
    aliases: []
  },
  {
    edo: 73,
    name: 'Armodue-9',
    steps: [9, 9, 9, 5, 9, 9, 9, 9, 5],
    aliases: []
  },
  {
    edo: 73,
    name: 'Joan-11',
    steps: [5, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 73,
    name: 'Nautilus-14',
    steps: [5, 5, 5, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 73,
    name: 'Passion-12',
    steps: [6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 73,
    name: 'Porky-7',
    steps: [13, 10, 10, 10, 10, 10, 10],
    aliases: []
  },
  {
    edo: 73,
    name: 'Sensis-8',
    steps: [8, 8, 11, 8, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 73,
    name: 'Sensis-11',
    steps: [8, 8, 8, 3, 8, 8, 8, 3, 8, 8, 3],
    aliases: []
  },
  {
    edo: 73,
    name: 'Spartan-11',
    steps: [11, 3, 11, 3, 11, 3, 11, 3, 3, 11, 3],
    aliases: []
  },
  {
    edo: 73,
    name: 'Supra-12',
    steps: [4, 9, 4, 9, 4, 4, 9, 4, 9, 4, 9, 4],
    aliases: []
  },
  {
    edo: 73,
    name: 'Thuja-13',
    steps: [9, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 73,
    name: 'Thuja-15',
    steps: [4, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 74,
    name: 'Meantone Chromatic (1/5-Pythagorean comma)',
    steps: [5, 7, 7, 5, 7, 5, 7, 5, 7, 7, 5, 7],
    aliases: ['Grosstone-12']
  },
  {
    edo: 74,
    name: 'Bipelog-14',
    steps: [5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5],
    aliases: []
  },
  {
    edo: 74,
    name: 'Hedgehog-14',
    steps: [7, 3, 7, 7, 3, 7, 3, 7, 3, 7, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 74,
    name: 'Injera-12',
    steps: [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7],
    aliases: []
  },
  {
    edo: 74,
    name: 'Injera-14',
    steps: [6, 6, 6, 6, 6, 6, 1, 6, 6, 6, 6, 6, 6, 1],
    aliases: []
  },
  {
    edo: 74,
    name: 'Lemba-6',
    steps: [14, 9, 14, 14, 9, 14],
    aliases: []
  },
  {
    edo: 74,
    name: 'Lemba-10',
    steps: [9, 5, 9, 5, 9, 9, 5, 9, 5, 9],
    aliases: []
  },
  {
    edo: 74,
    name: 'Nautilus-14',
    steps: [5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 74,
    name: 'Pajara-12',
    steps: [7, 7, 7, 2, 7, 7, 7, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 74,
    name: 'Urchin-14',
    steps: [7, 7, 3, 7, 3, 7, 3, 7, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 74,
    name: 'Jones Igliashon',
    steps: [5, 7, 5, 5, 9, 5, 7, 5, 7, 7, 3, 9],
    aliases: []
  },
  {
    edo: 75,
    name: 'Twelve-tone Chromatic (2/21-comma positive)',
    steps: [8, 5, 5, 8, 5, 8, 5, 8, 5, 5, 8, 5],
    aliases: []
  },
  {
    edo: 75,
    name: '"Just" Chromatic',
    steps: [7, 6, 7, 4, 7, 6, 7, 7, 4, 7, 6, 7],
    aliases: []
  },
  {
    edo: 75,
    name: 'Hemiaug-12',
    steps: [16, 3, 3, 3, 16, 3, 3, 3, 16, 3, 3, 3],
    aliases: []
  },
  {
    edo: 75,
    name: 'Joan-11',
    steps: [6, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 75,
    name: 'Negri-9',
    steps: [8, 8, 8, 8, 11, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 75,
    name: 'Negri-10',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 8, 3],
    aliases: []
  },
  {
    edo: 75,
    name: 'Oodako-9',
    steps: [11, 11, 3, 11, 11, 3, 11, 11, 3],
    aliases: []
  },
  {
    edo: 75,
    name: 'Orwell-5',
    steps: [17, 17, 17, 17, 7],
    aliases: []
  },
  {
    edo: 75,
    name: 'Orwell-9',
    steps: [10, 7, 10, 7, 10, 7, 10, 7, 7],
    aliases: []
  },
  {
    edo: 75,
    name: 'Orwell-13',
    steps: [3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 7],
    aliases: []
  },
  {
    edo: 75,
    name: 'Schismic-12',
    steps: [5, 8, 5, 5, 8, 5, 8, 5, 5, 8, 5, 8],
    aliases: []
  },
  {
    edo: 75,
    name: 'Semisept-13',
    steps: [7, 5, 7, 5, 5, 7, 5, 7, 5, 5, 7, 5, 5],
    aliases: []
  },
  {
    edo: 75,
    name: 'Tetracot-7',
    steps: [11, 11, 11, 11, 11, 11, 9],
    aliases: []
  },
  {
    edo: 75,
    name: 'Tetracot-13',
    steps: [2, 9, 2, 9, 2, 9, 2, 9, 9, 2, 9, 2, 9],
    aliases: []
  },
  {
    edo: 76,
    name: 'Bipelog-14',
    steps: [5, 5, 5, 8, 5, 5, 5, 5, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 76,
    name: 'Mavila-7',
    steps: [10, 13, 10, 10, 13, 10, 10],
    aliases: []
  },
  {
    edo: 76,
    name: 'Mavila-9',
    steps: [10, 3, 10, 10, 10, 3, 10, 10, 10],
    aliases: []
  },
  {
    edo: 76,
    name: 'Pajara-10',
    steps: [7, 7, 7, 10, 7, 7, 7, 7, 10, 7],
    aliases: []
  },
  {
    edo: 76,
    name: 'Pajara-12',
    steps: [7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7],
    aliases: []
  },
  {
    edo: 76,
    name: 'Squares-11',
    steps: [12, 5, 5, 12, 5, 5, 5, 12, 5, 5, 5],
    aliases: []
  },
  {
    edo: 76,
    name: 'Squares-14',
    steps: [7, 5, 5, 5, 7, 5, 5, 5, 5, 7, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 76,
    name: 'Superpyth-12',
    steps: [3, 11, 3, 3, 11, 3, 11, 3, 3, 11, 3, 11],
    aliases: []
  },
  {
    edo: 76,
    name: 'Wilson Golden-11',
    steps: [8, 8, 5, 8, 8, 5, 8, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Meantone Chromatic (18/59-comma)',
    steps: [7, 6, 6, 7, 6, 7, 6, 7, 6, 6, 7, 6],
    aliases: ['Grackle-12']
  },
  {
    edo: 77,
    name: '"Just" Chromatic',
    steps: [7, 6, 7, 5, 7, 6, 7, 7, 5, 7, 6, 7],
    aliases: []
  },
  {
    edo: 77,
    name: 'Absurdity-14',
    steps: [1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10],
    aliases: []
  },
  {
    edo: 77,
    name: 'Bleu-9',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Greeley-8',
    steps: [7, 10, 10, 10, 10, 10, 10, 10],
    aliases: []
  },
  {
    edo: 77,
    name: 'Greeley-15',
    steps: [7, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3],
    aliases: []
  },
  {
    edo: 77,
    name: 'Greenwood-14',
    steps: [7, 4, 7, 4, 7, 4, 7, 4, 7, 4, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 77,
    name: 'Mabila-7',
    steps: [9, 16, 9, 9, 9, 16, 9],
    aliases: []
  },
  {
    edo: 77,
    name: 'Mabila-9',
    steps: [9, 9, 7, 9, 9, 9, 9, 7, 9],
    aliases: []
  },
  {
    edo: 77,
    name: 'Negri-9',
    steps: [8, 8, 8, 8, 13, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 77,
    name: 'Negri-10',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 8, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Ragimetric-13',
    steps: [8, 5, 5, 8, 5, 5, 8, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Septimal-14',
    steps: [6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Slendric-5',
    steps: [15, 15, 15, 17, 15],
    aliases: []
  },
  {
    edo: 77,
    name: 'Slendric-6',
    steps: [15, 15, 15, 15, 2, 15],
    aliases: []
  },
  {
    edo: 77,
    name: 'Slendric-11',
    steps: [13, 2, 13, 2, 13, 2, 13, 2, 2, 13, 2],
    aliases: []
  },
  {
    edo: 77,
    name: 'Whitewood-14',
    steps: [2, 9, 2, 9, 2, 9, 2, 9, 2, 9, 2, 9, 2, 9],
    aliases: []
  },
  {
    edo: 77,
    name: 'Smith\'s Star',
    steps: [5, 15, 5, 15, 5, 12, 8, 12],
    aliases: []
  },
  {
    edo: 77,
    name: 'Smith\'s Nova',
    steps: [8, 12, 5, 15, 5, 12, 8, 12],
    aliases: []
  },
  {
    edo: 77,
    name: 'Starling-12',
    steps: [5, 10, 5, 5, 7, 8, 5, 7, 5, 8, 7, 5],
    aliases: []
  },
  {
    edo: 77,
    name: 'Valentine-15',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5],
    aliases: []
  },
  {
    edo: 78,
    name: 'Anguirus-10',
    steps: [7, 7, 9, 7, 9, 7, 7, 9, 7, 9],
    aliases: []
  },
  {
    edo: 78,
    name: 'Anguirus-14',
    steps: [7, 2, 7, 7, 2, 7, 7, 7, 2, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 78,
    name: 'August-12',
    steps: [5, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7],
    aliases: []
  },
  {
    edo: 78,
    name: 'Hexe-12',
    steps: [8, 5, 8, 5, 8, 5, 8, 5, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 78,
    name: 'Inflated-12',
    steps: [11, 5, 5, 5, 11, 5, 5, 5, 11, 5, 5, 5],
    aliases: []
  },
  {
    edo: 78,
    name: 'Inflated-15',
    steps: [5, 6, 5, 5, 5, 5, 6, 5, 5, 5, 5, 6, 5, 5, 5],
    aliases: []
  },
  {
    edo: 78,
    name: 'Pajara-10',
    steps: [7, 7, 7, 11, 7, 7, 7, 7, 11, 7],
    aliases: []
  },
  {
    edo: 78,
    name: 'Pajara-12',
    steps: [7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 78,
    name: 'Suhajira-7',
    steps: [14, 9, 14, 9, 14, 9, 9],
    aliases: []
  },
  {
    edo: 78,
    name: 'Suhajira-10',
    steps: [9, 5, 9, 9, 5, 9, 9, 9, 5, 9],
    aliases: []
  },
  {
    edo: 78,
    name: 'Tertiaseptal-15',
    steps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 79,
    name: 'Meantone Chromatic (3/20-comma)',
    steps: [6, 7, 7, 6, 7, 6, 7, 6, 7, 7, 6, 7],
    aliases: []
  },
  {
    edo: 79,
    name: 'Bluebirds-7',
    steps: [12, 12, 12, 12, 7, 12, 12],
    aliases: []
  },
  {
    edo: 79,
    name: 'Bluebirds-13',
    steps: [5, 7, 5, 7, 5, 7, 5, 7, 7, 5, 7, 5, 7],
    aliases: []
  },
  {
    edo: 79,
    name: 'Gorgo-6',
    steps: [15, 15, 4, 15, 15, 15],
    aliases: []
  },
  {
    edo: 79,
    name: 'Gorgo-11',
    steps: [4, 11, 4, 11, 4, 11, 4, 11, 4, 11, 4],
    aliases: []
  },
  {
    edo: 79,
    name: 'Kangaroo-13',
    steps: [12, 5, 5, 5, 5, 5, 12, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 79,
    name: 'Migration-10',
    steps: [3, 10, 10, 3, 10, 10, 3, 10, 10, 10],
    aliases: []
  },
  {
    edo: 79,
    name: 'Mohajira-7',
    steps: [13, 10, 13, 10, 13, 10, 10],
    aliases: []
  },
  {
    edo: 79,
    name: 'Mohajira-10',
    steps: [3, 10, 10, 3, 10, 10, 10, 3, 10, 10],
    aliases: []
  },
  {
    edo: 79,
    name: 'Progress-15',
    steps: [5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 79,
    name: 'Sentinel-14',
    steps: [5, 8, 5, 5, 5, 8, 5, 5, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 79,
    name: 'Squares-11',
    steps: [13, 5, 5, 13, 5, 5, 5, 13, 5, 5, 5],
    aliases: []
  },
  {
    edo: 79,
    name: 'Squares-14',
    steps: [8, 5, 5, 5, 8, 5, 5, 5, 5, 8, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 80,
    name: 'Twelve-tone Chromatic (1/7-comma positive)',
    steps: [9, 5, 5, 9, 5, 9, 5, 9, 5, 5, 9, 5],
    aliases: []
  },
  {
    edo: 80,
    name: 'Bidia-12',
    steps: [6, 7, 7, 6, 7, 7, 6, 7, 7, 6, 7, 7],
    aliases: []
  },
  {
    edo: 80,
    name: 'Canou-9',
    steps: [4, 13, 4, 13, 13, 4, 13, 4, 12],
    aliases: []
  },
  {
    edo: 80,
    name: 'Canou-14',
    steps: [4, 9, 4, 4, 9, 4, 9, 4, 4, 9, 4, 4, 8, 4],
    aliases: []
  },
  {
    edo: 80,
    name: 'Decimal-10',
    steps: [6, 11, 6, 11, 6, 6, 11, 6, 11, 6],
    aliases: []
  },
  {
    edo: 80,
    name: 'Diaschismic-10',
    steps: [7, 7, 7, 12, 7, 7, 7, 7, 12, 7],
    aliases: []
  },
  {
    edo: 80,
    name: 'Diaschismic-12',
    steps: [7, 7, 7, 5, 7, 7, 7, 7, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 80,
    name: 'Ferrum-10',
    steps: [7, 9, 7, 9, 7, 9, 7, 9, 7, 9],
    aliases: []
  },
  {
    edo: 80,
    name: 'Hedgehog-14',
    steps: [7, 4, 7, 7, 4, 7, 4, 7, 4, 7, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 80,
    name: 'Parakleismic-11',
    steps: [13, 4, 13, 4, 4, 13, 4, 4, 13, 4, 4],
    aliases: []
  },
  {
    edo: 80,
    name: 'Parakleismic-15',
    steps: [9, 4, 4, 9, 4, 4, 4, 9, 4, 4, 4, 9, 4, 4, 4],
    aliases: []
  },
  {
    edo: 80,
    name: 'Porky-7',
    steps: [14, 11, 11, 11, 11, 11, 11],
    aliases: []
  },
  {
    edo: 80,
    name: 'Semisept-13',
    steps: [8, 5, 8, 5, 5, 8, 5, 8, 5, 5, 8, 5, 5],
    aliases: []
  },
  {
    edo: 80,
    name: 'Trisedodge-10',
    steps: [5, 11, 5, 11, 5, 11, 5, 11, 5, 11],
    aliases: []
  },
  {
    edo: 80,
    name: 'Trisedodge-15',
    steps: [5, 5, 6, 5, 5, 6, 5, 5, 6, 5, 5, 6, 5, 5, 6],
    aliases: []
  },
  {
    edo: 81,
    name: 'Meantone Chromatic (5/19-comma)',
    steps: [5, 8, 8, 5, 8, 5, 8, 5, 8, 8, 5, 8],
    aliases: ['Aurus-12']
  },
  {
    edo: 81,
    name: 'August-12',
    steps: [6, 7, 7, 7, 6, 7, 7, 7, 6, 7, 7, 7],
    aliases: []
  },
  {
    edo: 81,
    name: 'Deflated-9',
    steps: [8, 11, 8, 8, 11, 8, 8, 11, 8],
    aliases: []
  },
  {
    edo: 81,
    name: 'Godzilla-5',
    steps: [13, 17, 17, 17, 17],
    aliases: []
  },
  {
    edo: 81,
    name: 'Godzilla-9',
    steps: [13, 13, 4, 13, 4, 13, 4, 13, 4],
    aliases: []
  },
  {
    edo: 81,
    name: 'Godzilla-14',
    steps: [9, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4],
    aliases: []
  },
  {
    edo: 81,
    name: 'Leantone-6',
    steps: [13, 13, 13, 13, 13, 16],
    aliases: ['Spell-6']
  },
  {
    edo: 81,
    name: 'Leantone-7',
    steps: [13, 13, 13, 13, 13, 13, 3],
    aliases: ['Spell-7']
  },
  {
    edo: 81,
    name: 'Leantone-13',
    steps: [10, 3, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3],
    aliases: ['Spell-13']
  },
  {
    edo: 81,
    name: 'Polyhymnia-12',
    steps: [10, 3, 10, 3, 10, 8, 3, 10, 3, 10, 3, 8],
    aliases: []
  },
  {
    edo: 81,
    name: 'Porcupine-7',
    steps: [11, 11, 11, 15, 11, 11, 11],
    aliases: []
  },
  {
    edo: 81,
    name: 'Porcupine-7 Major',
    steps: [11, 15, 11, 11, 11, 11, 11],
    aliases: []
  },
  {
    edo: 81,
    name: 'Porcupine-8',
    steps: [11, 11, 11, 11, 11, 11, 11, 4],
    aliases: []
  },
  {
    edo: 81,
    name: 'Porcupine-15',
    steps: [7, 4, 7, 4, 4, 7, 4, 7, 4, 7, 4, 7, 4, 7, 4],
    aliases: []
  },
  {
    edo: 82,
    name: 'Astrology-6',
    steps: [15, 11, 15, 15, 11, 15],
    aliases: []
  },
  {
    edo: 82,
    name: 'Astrology-10',
    steps: [11, 4, 11, 11, 4, 11, 4, 11, 11, 4],
    aliases: []
  },
  {
    edo: 82,
    name: 'Decimal-10',
    steps: [7, 10, 7, 10, 7, 7, 10, 7, 10, 7],
    aliases: []
  },
  {
    edo: 82,
    name: 'Echidnic-10',
    steps: [7, 9, 9, 7, 9, 7, 9, 9, 7, 9],
    aliases: []
  },
  {
    edo: 82,
    name: 'Pajaric-10',
    steps: [7, 7, 13, 7, 7, 7, 7, 13, 7, 7],
    aliases: []
  },
  {
    edo: 82,
    name: 'Pajaric-12',
    steps: [7, 7, 7, 6, 7, 7, 7, 7, 7, 6, 7, 7],
    aliases: []
  },
  {
    edo: 82,
    name: 'Ripple-12',
    steps: [7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 82,
    name: 'Semimiracle-12',
    steps: [8, 8, 8, 1, 8, 8, 8, 8, 8, 1, 8, 8],
    aliases: []
  },
  {
    edo: 82,
    name: 'Spell-7',
    steps: [13, 13, 13, 13, 13, 13, 4],
    aliases: []
  },
  {
    edo: 82,
    name: 'Spell-13',
    steps: [9, 4, 9, 4, 9, 4, 9, 4, 9, 4, 9, 4, 4],
    aliases: []
  },
  {
    edo: 83,
    name: 'Apparatus-10',
    steps: [8, 8, 8, 8, 8, 8, 8, 11, 8, 8],
    aliases: []
  },
  {
    edo: 83,
    name: 'Apparatus-11',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 83,
    name: 'Flattone-12',
    steps: [4, 9, 9, 4, 9, 4, 9, 9, 4, 9, 4, 9],
    aliases: []
  },
  {
    edo: 83,
    name: 'Kleismic-7',
    steps: [5, 17, 5, 17, 5, 17, 17],
    aliases: []
  },
  {
    edo: 83,
    name: 'Kleismic-11',
    steps: [5, 5, 12, 5, 12, 5, 5, 12, 5, 5, 12],
    aliases: []
  },
  {
    edo: 83,
    name: 'Machine-11',
    steps: [8, 7, 8, 7, 8, 7, 8, 7, 8, 8, 7],
    aliases: []
  },
  {
    edo: 83,
    name: 'Mothra-11',
    steps: [13, 3, 13, 3, 13, 3, 13, 3, 13, 3, 3],
    aliases: []
  },
  {
    edo: 83,
    name: 'Ptolemy-7',
    steps: [13, 11, 13, 11, 13, 11, 11],
    aliases: []
  },
  {
    edo: 83,
    name: 'Quasisuper-12',
    steps: [4, 4, 11, 4, 11, 4, 11, 4, 4, 11, 4, 11],
    aliases: []
  },
  {
    edo: 83,
    name: 'Ripple-12',
    steps: [7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 83,
    name: 'Slurpee-15',
    steps: [13, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 83,
    name: 'Supra-12',
    steps: [4, 11, 4, 11, 4, 4, 11, 4, 11, 4, 11, 4],
    aliases: []
  },
  {
    edo: 83,
    name: 'Twothirdtonic-9',
    steps: [9, 9, 9, 11, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 83,
    name: 'Twothirdtonic-10',
    steps: [9, 9, 9, 9, 2, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 84,
    name: '"Just" Chromatic',
    steps: [8, 6, 8, 5, 8, 6, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Mixolydian',
    steps: [4, 8, 33, 4, 8, 33, 18],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Lydian',
    steps: [8, 33, 4, 8, 33, 18, 4],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Phrygian',
    steps: [33, 4, 8, 33, 18, 4, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Dorian',
    steps: [4, 8, 33, 18, 4, 8, 33],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Hypolydian',
    steps: [8, 33, 18, 4, 8, 33, 4],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Hypophrygian',
    steps: [33, 18, 4, 8, 33, 4, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Ratio 1:2 Soft Chromatic Hypodorian',
    steps: [18, 4, 8, 33, 4, 8, 33],
    aliases: []
  },
  {
    edo: 84,
    name: 'Smith\'s Nova',
    steps: [11, 17, 7, 21, 7, 17, 11, 17],
    aliases: []
  },
  {
    edo: 84,
    name: 'Smith\'s Star',
    steps: [7, 21, 7, 21, 7, 17, 11, 17],
    aliases: []
  },
  {
    edo: 84,
    name: 'Unsmate-13',
    steps: [6, 11, 6, 11, 6, 11, 6, 6, 11, 6, 11, 6, 11],
    aliases: []
  },
  {
    edo: 84,
    name: 'Valentine-15',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 7, 7, 7],
    aliases: []
  },
  {
    edo: 84,
    name: 'Absurdity-14',
    steps: [1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11],
    aliases: []
  },
  {
    edo: 84,
    name: 'Fleetwood-14',
    steps: [4, 4, 11, 4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 11],
    aliases: []
  },
  {
    edo: 84,
    name: 'Inflated-12',
    steps: [13, 5, 5, 5, 13, 5, 5, 5, 13, 5, 5, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Inflated-15',
    steps: [5, 8, 5, 5, 5, 5, 8, 5, 5, 5, 5, 8, 5, 5, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Mabila-7',
    steps: [10, 17, 10, 10, 10, 17, 10],
    aliases: []
  },
  {
    edo: 84,
    name: 'Mabila-9',
    steps: [10, 10, 7, 10, 10, 10, 10, 7, 10],
    aliases: []
  },
  {
    edo: 84,
    name: 'Marvel-12',
    steps: [8, 6, 8, 5, 8, 6, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Orwell-9',
    steps: [11, 8, 11, 8, 11, 8, 11, 8, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Orwell-13',
    steps: [3, 8, 8, 3, 8, 8, 3, 8, 8, 3, 8, 8, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Secant-14',
    steps: [10, 3, 10, 3, 10, 3, 3, 10, 3, 10, 3, 10, 3, 3],
    aliases: []
  },
  {
    edo: 84,
    name: 'Sensi-8',
    steps: [9, 9, 13, 9, 9, 13, 9, 13],
    aliases: []
  },
  {
    edo: 84,
    name: 'Sensi-11',
    steps: [9, 9, 9, 4, 9, 9, 9, 4, 9, 9, 4],
    aliases: []
  },
  {
    edo: 84,
    name: 'Septimal-14',
    steps: [7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Silver-10',
    steps: [9, 9, 9, 7, 9, 9, 7, 9, 9, 7],
    aliases: []
  },
  {
    edo: 84,
    name: 'Triforce-9',
    steps: [11, 11, 6, 11, 11, 6, 11, 11, 6],
    aliases: []
  },
  {
    edo: 84,
    name: 'Triforce-15',
    steps: [5, 6, 5, 6, 6, 5, 6, 5, 6, 6, 5, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 84,
    name: 'Vishnu-14',
    steps: [12, 5, 5, 5, 5, 5, 5, 12, 5, 5, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Zeus7tri',
    steps: [11, 16, 11, 11, 16, 11, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Zeus8tri',
    steps: [11, 11, 11, 13, 11, 11, 11, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Minerva-12',
    steps: [8, 8, 6, 8, 6, 7, 8, 6, 8, 6, 8, 5],
    aliases: []
  },
  {
    edo: 84,
    name: 'Antipental Blues',
    steps: [19, 16, 3, 11, 19, 16],
    aliases: []
  },
  {
    edo: 84,
    name: 'Spectral Blues',
    steps: [19, 16, 3, 11, 13, 6, 16],
    aliases: []
  },
  {
    edo: 84,
    name: 'Flattened Ionian Pentatonic',
    steps: [27, 8, 14, 27, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Blackened Skies',
    steps: [22, 13, 6, 8, 6, 23, 6],
    aliases: []
  },
  {
    edo: 84,
    name: 'Lost Spirit',
    steps: [22, 13, 6, 8, 16, 6, 13],
    aliases: []
  },
  {
    edo: 84,
    name: 'Compton Moonbeam',
    steps: [14, 7, 28, 27, 8],
    aliases: []
  },
  {
    edo: 84,
    name: 'Compton Palace',
    steps: [11, 10, 14, 14, 11, 10, 14],
    aliases: []
  },
  {
    edo: 84,
    name: 'Compton Underpass',
    steps: [22, 27, 15, 7, 13],
    aliases: []
  },
  {
    edo: 84,
    name: 'Arcade',
    steps: [27, 6, 16, 19, 16],
    aliases: []
  },
  {
    edo: 84,
    name: 'Mechanical',
    steps: [21, 6, 22, 19, 16],
    aliases: []
  },
  {
    edo: 84,
    name: 'Springwater',
    steps: [14, 13, 22, 19, 16],
    aliases: []
  },
  {
    edo: 84,
    name: 'Deja Vu',
    steps: [22, 27, 8, 14, 13],
    aliases: []
  },
  {
    edo: 84,
    name: 'Freeway',
    steps: [19, 16, 14, 13, 11, 11],
    aliases: []
  },
  {
    edo: 84,
    name: 'Geode',
    steps: [19, 16, 14, 24, 11],
    aliases: []
  },
  {
    edo: 84,
    name: 'Sourgummy',
    steps: [18, 15, 17, 17, 17],
    aliases: []
  },
  {
    edo: 84,
    name: 'Bubblegum',
    steps: [17, 16, 17, 17, 17],
    aliases: []
  },
  {
    edo: 84,
    name: 'Spearmint',
    steps: [16, 18, 16, 17, 17],
    aliases: []
  },
  {
    edo: 84,
    name: 'Spaceship',
    steps: [6, 20, 7, 16, 19, 16],
    aliases: []
  },
  {
    edo: 85,
    name: 'Amity-7',
    steps: [13, 11, 13, 11, 13, 13, 11],
    aliases: []
  },
  {
    edo: 85,
    name: 'Archytas Clan-10',
    steps: [11, 6, 11, 6, 11, 6, 11, 6, 11, 6],
    aliases: []
  },
  {
    edo: 85,
    name: 'Archytas Clan-15',
    steps: [5, 6, 6, 5, 6, 6, 5, 6, 6, 5, 6, 6, 5, 6, 6],
    aliases: []
  },
  {
    edo: 85,
    name: 'Blacksmith-10',
    steps: [7, 10, 7, 10, 7, 10, 7, 10, 7, 10],
    aliases: []
  },
  {
    edo: 85,
    name: 'Blacksmith-15',
    steps: [7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7],
    aliases: []
  },
  {
    edo: 85,
    name: 'Galilei-12',
    steps: [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 85,
    name: 'Godzilla-5',
    steps: [13, 18, 18, 18, 18],
    aliases: []
  },
  {
    edo: 85,
    name: 'Godzilla-9',
    steps: [13, 13, 5, 13, 5, 13, 5, 13, 5],
    aliases: []
  },
  {
    edo: 85,
    name: 'Godzilla-14',
    steps: [8, 5, 8, 5, 5, 8, 5, 5, 8, 5, 5, 8, 5, 5],
    aliases: []
  },
  {
    edo: 85,
    name: 'Greeley-8',
    steps: [8, 11, 11, 11, 11, 11, 11, 11],
    aliases: []
  },
  {
    edo: 85,
    name: 'Greeley-15',
    steps: [8, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3],
    aliases: []
  },
  {
    edo: 85,
    name: 'Magic-7',
    steps: [23, 4, 23, 4, 23, 4, 4],
    aliases: []
  },
  {
    edo: 85,
    name: 'Magic-10',
    steps: [19, 4, 4, 4, 19, 4, 4, 19, 4, 4],
    aliases: []
  },
  {
    edo: 85,
    name: 'Magic-13',
    steps: [15, 4, 4, 4, 15, 4, 4, 4, 15, 4, 4, 4, 4],
    aliases: []
  },
  {
    edo: 85,
    name: 'Myna-7',
    steps: [19, 3, 19, 3, 19, 3, 19],
    aliases: []
  },
  {
    edo: 85,
    name: 'Myna-11',
    steps: [3, 16, 3, 3, 16, 3, 16, 3, 3, 16, 3],
    aliases: []
  },
  {
    edo: 85,
    name: 'Myna-15',
    steps: [3, 3, 13, 3, 3, 3, 13, 3, 3, 3, 13, 3, 3, 13, 3],
    aliases: []
  },
  {
    edo: 85,
    name: 'Negri-9',
    steps: [9, 9, 9, 9, 13, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 85,
    name: 'Negri-10',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 4],
    aliases: []
  },
  {
    edo: 85,
    name: 'Trisedodge-10',
    steps: [5, 12, 5, 12, 5, 12, 5, 12, 5, 12],
    aliases: []
  },
  {
    edo: 85,
    name: 'Trisedodge-15',
    steps: [5, 5, 7, 5, 5, 7, 5, 5, 7, 5, 5, 7, 5, 5, 7],
    aliases: []
  },
  {
    edo: 86,
    name: 'Decimal-10',
    steps: [7, 11, 7, 11, 7, 7, 11, 7, 11, 7],
    aliases: []
  },
  {
    edo: 86,
    name: 'Injera-12',
    steps: [7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 7, 8],
    aliases: []
  },
  {
    edo: 86,
    name: 'Injera-14',
    steps: [7, 7, 7, 7, 7, 7, 1, 7, 7, 7, 7, 7, 7, 1],
    aliases: []
  },
  {
    edo: 86,
    name: 'Migration-10',
    steps: [3, 11, 11, 3, 11, 11, 3, 11, 11, 11],
    aliases: []
  },
  {
    edo: 86,
    name: 'Mohajira-7',
    steps: [14, 11, 14, 11, 14, 11, 11],
    aliases: []
  },
  {
    edo: 86,
    name: 'Mohajira-10',
    steps: [3, 11, 11, 3, 11, 11, 11, 3, 11, 11],
    aliases: []
  },
  {
    edo: 86,
    name: 'Negri-9',
    steps: [9, 9, 9, 9, 14, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 86,
    name: 'Negri-10',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 5],
    aliases: []
  },
  {
    edo: 86,
    name: 'Pajara-10',
    steps: [8, 8, 8, 11, 8, 8, 8, 8, 11, 8],
    aliases: []
  },
  {
    edo: 86,
    name: 'Pajara-12',
    steps: [8, 8, 8, 3, 8, 8, 8, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 86,
    name: 'Passion-12',
    steps: [7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 86,
    name: 'Urchin-14',
    steps: [7, 7, 5, 7, 5, 7, 5, 7, 7, 5, 7, 5, 7, 5],
    aliases: []
  },
  {
    edo: 87,
    name: '"Just" Chromatic',
    steps: [8, 7, 8, 5, 8, 7, 8, 8, 5, 8, 7, 8],
    aliases: []
  },
  {
    edo: 87,
    name: 'Bleu-9',
    steps: [10, 10, 10, 10, 10, 10, 10, 10, 7],
    aliases: []
  },
  {
    edo: 87,
    name: 'Hemithirds-6',
    steps: [14, 14, 14, 14, 14, 17],
    aliases: []
  },
  {
    edo: 87,
    name: 'Hemithirds-7',
    steps: [14, 14, 14, 14, 14, 14, 3],
    aliases: []
  },
  {
    edo: 87,
    name: 'Hemithirds-13',
    steps: [11, 3, 11, 3, 11, 3, 11, 3, 11, 3, 11, 3, 3],
    aliases: []
  },
  {
    edo: 87,
    name: 'Kleismic-7',
    steps: [5, 18, 5, 18, 5, 18, 18],
    aliases: []
  },
  {
    edo: 87,
    name: 'Kleismic-11',
    steps: [5, 5, 13, 5, 13, 5, 5, 13, 5, 5, 13],
    aliases: []
  },
  {
    edo: 87,
    name: 'Misty-12',
    steps: [7, 7, 8, 7, 7, 7, 8, 7, 7, 7, 8, 7],
    aliases: []
  },
  {
    edo: 87,
    name: 'Parizek-11',
    steps: [7, 7, 7, 12, 7, 7, 7, 7, 7, 7, 12],
    aliases: []
  },
  {
    edo: 87,
    name: 'Parizek-13',
    steps: [7, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 5],
    aliases: []
  },
  {
    edo: 87,
    name: 'Rodan-5',
    steps: [17, 17, 17, 19, 17],
    aliases: []
  },
  {
    edo: 87,
    name: 'Rodan-11',
    steps: [15, 2, 15, 2, 15, 2, 15, 2, 2, 15, 2],
    aliases: []
  },
  {
    edo: 87,
    name: 'Ternary-6',
    steps: [17, 12, 17, 12, 17, 12],
    aliases: []
  },
  {
    edo: 87,
    name: 'Ternary-15',
    steps: [7, 5, 5, 7, 5, 7, 5, 5, 7, 5, 7, 5, 5, 7, 5],
    aliases: []
  },
  {
    edo: 87,
    name: 'Triforce-9',
    steps: [11, 11, 7, 11, 11, 7, 11, 11, 7],
    aliases: []
  },
  {
    edo: 87,
    name: 'Triforce-15',
    steps: [4, 7, 4, 7, 7, 4, 7, 4, 7, 7, 4, 7, 4, 7, 7],
    aliases: []
  },
  {
    edo: 87,
    name: 'Valentine-15',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 11, 8, 8, 8],
    aliases: []
  },
  {
    edo: 88,
    name: 'Meantone Chromatic (3/10-comma)',
    steps: [5, 9, 9, 5, 9, 5, 9, 5, 9, 9, 5, 9],
    aliases: ['Harrison-Lucy-12']
  },
  {
    edo: 88,
    name: 'Injera-12',
    steps: [7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 9],
    aliases: []
  },
  {
    edo: 88,
    name: 'Injera-14',
    steps: [7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 7, 7, 7, 2],
    aliases: []
  },
  {
    edo: 88,
    name: 'Lemba-6',
    steps: [17, 10, 17, 17, 10, 17],
    aliases: []
  },
  {
    edo: 88,
    name: 'Lemba-10',
    steps: [10, 7, 10, 7, 10, 10, 7, 10, 7, 10],
    aliases: []
  },
  {
    edo: 88,
    name: 'Mothra-11',
    steps: [14, 3, 14, 3, 14, 3, 14, 3, 14, 3, 3],
    aliases: []
  },
  {
    edo: 88,
    name: 'Tetracot-7',
    steps: [13, 13, 13, 13, 13, 13, 10],
    aliases: []
  },
  {
    edo: 88,
    name: 'Tetracot-13',
    steps: [3, 10, 3, 10, 3, 10, 3, 10, 10, 3, 10, 3, 10],
    aliases: []
  },
  {
    edo: 88,
    name: 'Thuja-13',
    steps: [11, 6, 6, 6, 6, 6, 11, 6, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 88,
    name: 'Thuja-15',
    steps: [5, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6],
    aliases: []
  },
  {
    edo: 89,
    name: 'Meantone Chromatic (1/26-comma)',
    steps: [8, 7, 7, 8, 7, 8, 7, 8, 7, 7, 8, 7],
    aliases: ['Quiretsim-12']
  },
  {
    edo: 89,
    name: '"Just" Chromatic',
    steps: [8, 7, 8, 6, 8, 7, 8, 8, 6, 8, 7, 8],
    aliases: []
  },
  {
    edo: 89,
    name: 'Laz-13',
    steps: [9, 2, 9, 9, 2, 9, 9, 2, 9, 9, 9, 2, 9],
    aliases: []
  },
  {
    edo: 89,
    name: 'Mohajira-10',
    steps: [4, 11, 11, 4, 11, 11, 11, 4, 11, 11],
    aliases: []
  },
  {
    edo: 89,
    name: 'Muggles-13',
    steps: [5, 5, 13, 5, 5, 5, 13, 5, 5, 5, 5, 13, 5],
    aliases: []
  },
  {
    edo: 89,
    name: 'Myna-11',
    steps: [3, 17, 3, 3, 17, 3, 17, 3, 3, 17, 3],
    aliases: []
  },
  {
    edo: 89,
    name: 'Myna-15',
    steps: [3, 3, 14, 3, 3, 3, 14, 3, 3, 3, 14, 3, 3, 14, 3],
    aliases: []
  },
  {
    edo: 89,
    name: 'Orgone-11',
    steps: [7, 7, 10, 7, 10, 7, 7, 10, 7, 7, 10],
    aliases: []
  },
  {
    edo: 89,
    name: 'Orgone-15',
    steps: [7, 7, 7, 3, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 89,
    name: 'Unsmate-13',
    steps: [5, 9, 5, 9, 5, 9, 5, 5, 9, 5, 9, 5, 9],
    aliases: []
  },
  {
    edo: 90,
    name: 'Augmented-6',
    steps: [23, 7, 23, 7, 23, 7],
    aliases: []
  },
  {
    edo: 90,
    name: 'Augmented-9',
    steps: [7, 16, 7, 7, 16, 7, 7, 16, 7],
    aliases: []
  },
  {
    edo: 90,
    name: 'Augmented-12',
    steps: [7, 7, 9, 7, 7, 7, 9, 7, 7, 7, 9, 7],
    aliases: []
  },
  {
    edo: 90,
    name: 'Augmented-15',
    steps: [7, 7, 2, 7, 7, 7, 7, 2, 7, 7, 7, 7, 2, 7, 7],
    aliases: []
  },
  {
    edo: 90,
    name: 'Decimal-10',
    steps: [7, 12, 7, 12, 7, 7, 12, 7, 12, 7],
    aliases: []
  },
  {
    edo: 90,
    name: 'Injera-12',
    steps: [7, 7, 7, 7, 7, 10, 7, 7, 7, 7, 7, 10],
    aliases: []
  },
  {
    edo: 90,
    name: 'Injera-14',
    steps: [7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 3],
    aliases: []
  },
  {
    edo: 90,
    name: 'Lemba-6',
    steps: [17, 11, 17, 17, 11, 17],
    aliases: []
  },
  {
    edo: 90,
    name: 'Lemba-10',
    steps: [11, 6, 11, 6, 11, 11, 6, 11, 6, 11],
    aliases: []
  },
  {
    edo: 90,
    name: 'Pajara-12',
    steps: [8, 8, 8, 5, 8, 8, 8, 8, 8, 5, 8, 8],
    aliases: []
  },
  {
    edo: 91,
    name: 'Meantone Chromatic (1/7-comma)',
    steps: [7, 8, 8, 7, 8, 7, 8, 7, 8, 8, 7, 8],
    aliases: ['Romieu-12']
  },
  {
    edo: 91,
    name: 'Dichotic-7',
    steps: [17, 10, 10, 17, 10, 17, 10],
    aliases: []
  },
  {
    edo: 91,
    name: 'Dichotic-10',
    steps: [7, 10, 10, 10, 7, 10, 10, 7, 10, 10],
    aliases: []
  },
  {
    edo: 91,
    name: 'HungarianNaiveOrwell-13',
    steps: [7, 7, 8, 6, 11, 5, 5, 7, 10, 4, 4, 13, 4],
    aliases: []
  },
  {
    edo: 91,
    name: 'Kleismic-7',
    steps: [5, 19, 5, 19, 5, 19, 19],
    aliases: []
  },
  {
    edo: 91,
    name: 'Kleismic-11',
    steps: [5, 5, 14, 5, 14, 5, 5, 14, 5, 5, 14],
    aliases: []
  },
  {
    edo: 91,
    name: 'Septimal-14',
    steps: [7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6],
    aliases: []
  },
  {
    edo: 91,
    name: 'Septimin-9',
    steps: [9, 11, 9, 11, 9, 11, 9, 11, 11],
    aliases: []
  },
  {
    edo: 91,
    name: 'Septimin-14',
    steps: [9, 9, 2, 9, 9, 2, 9, 9, 2, 9, 9, 2, 9, 2],
    aliases: []
  },
  {
    edo: 91,
    name: 'Blackened Skies',
    steps: [25, 13, 6, 9, 6, 26, 6],
    aliases: []
  },
  {
    edo: 91,
    name: 'Greyed Skies',
    steps: [24, 14, 7, 8, 7, 24, 7],
    aliases: []
  },
  {
    edo: 91,
    name: 'Lost Spirit',
    steps: [23, 15, 9, 6, 17, 6, 15],
    aliases: []
  },
  {
    edo: 91,
    name: 'Palace',
    steps: [12, 12, 14, 15, 12, 12, 14],
    aliases: []
  },
  {
    edo: 92,
    name: 'Meantone Chromatic (49/99-comma)',
    steps: [3, 11, 11, 3, 11, 3, 11, 3, 11, 11, 3, 11],
    aliases: []
  },
  {
    edo: 92,
    name: 'Anguirus-10',
    steps: [8, 8, 11, 8, 11, 8, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 92,
    name: 'Anguirus-14',
    steps: [8, 3, 8, 8, 3, 8, 8, 8, 3, 8, 8, 3, 8, 8],
    aliases: []
  },
  {
    edo: 92,
    name: 'Miracle-10',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 11],
    aliases: []
  },
  {
    edo: 92,
    name: 'Miracle-12',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 7, 2],
    aliases: []
  },
  {
    edo: 93,
    name: 'Augmented-6',
    steps: [24, 7, 24, 7, 24, 7],
    aliases: []
  },
  {
    edo: 93,
    name: 'Augmented-9',
    steps: [7, 17, 7, 7, 17, 7, 7, 17, 7],
    aliases: []
  },
  {
    edo: 93,
    name: 'Augmented-12',
    steps: [7, 7, 10, 7, 7, 7, 10, 7, 7, 7, 10, 7],
    aliases: []
  },
  {
    edo: 93,
    name: 'Augmented-15',
    steps: [7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7],
    aliases: []
  },
  {
    edo: 93,
    name: 'Inflated-12',
    steps: [13, 6, 6, 6, 13, 6, 6, 6, 13, 6, 6, 6],
    aliases: []
  },
  {
    edo: 93,
    name: 'Inflated-15',
    steps: [6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6],
    aliases: []
  },
  {
    edo: 93,
    name: 'Ripple-12',
    steps: [8, 8, 8, 5, 8, 8, 8, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 93,
    name: 'Superpyth-12',
    steps: [4, 13, 4, 4, 13, 4, 13, 4, 4, 13, 4, 13],
    aliases: []
  },
  {
    edo: 93,
    name: 'Triforce-9',
    steps: [12, 12, 7, 12, 12, 7, 12, 12, 7],
    aliases: []
  },
  {
    edo: 93,
    name: 'Triforce-15',
    steps: [5, 7, 5, 7, 7, 5, 7, 5, 7, 7, 5, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 94,
    name: 'Twelve-tone Chromatic (1/125-comma positive)',
    steps: [9, 7, 7, 9, 7, 9, 7, 9, 7, 7, 9, 7],
    aliases: ['Schismatic-12']
  },
  {
    edo: 94,
    name: '"Just" Chromatic',
    steps: [9, 7, 9, 5, 9, 7, 9, 9, 5, 9, 7, 9],
    aliases: []
  },
  {
    edo: 94,
    name: 'Armodue-7',
    steps: [12, 17, 12, 12, 12, 17, 12],
    aliases: []
  },
  {
    edo: 94,
    name: 'Armodue-9',
    steps: [12, 12, 12, 5, 12, 12, 12, 12, 5],
    aliases: []
  },
  {
    edo: 94,
    name: 'Hedgehog-14',
    steps: [8, 5, 8, 8, 5, 8, 5, 8, 5, 8, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 94,
    name: 'Lemba-6',
    steps: [18, 11, 18, 18, 11, 18],
    aliases: []
  },
  {
    edo: 94,
    name: 'Lemba-10',
    steps: [11, 7, 11, 7, 11, 11, 7, 11, 7, 11],
    aliases: []
  },
  {
    edo: 94,
    name: 'Marvel-12',
    steps: [9, 7, 9, 5, 9, 7, 9, 9, 9, 3, 9, 9],
    aliases: []
  },
  {
    edo: 94,
    name: 'Schismic-12',
    steps: [7, 9, 7, 7, 9, 7, 9, 7, 7, 9, 7, 9],
    aliases: []
  },
  {
    edo: 94,
    name: 'Spell-7',
    steps: [15, 15, 15, 15, 15, 15, 4],
    aliases: []
  },
  {
    edo: 94,
    name: 'Spell-13',
    steps: [11, 4, 11, 4, 11, 4, 11, 4, 11, 4, 11, 4, 4],
    aliases: []
  },
  {
    edo: 94,
    name: 'Urchin-14',
    steps: [8, 8, 5, 8, 5, 8, 5, 8, 8, 5, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 95,
    name: 'Blacksmith-10',
    steps: [8, 11, 8, 11, 8, 11, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 95,
    name: 'Blacksmith-15',
    steps: [8, 3, 8, 8, 3, 8, 8, 3, 8, 8, 3, 8, 8, 3, 8],
    aliases: []
  },
  {
    edo: 95,
    name: 'Octacot-14',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4],
    aliases: []
  },
  {
    edo: 95,
    name: 'Porky-7',
    steps: [17, 13, 13, 13, 13, 13, 13],
    aliases: []
  },
  {
    edo: 95,
    name: 'Ripple-12',
    steps: [8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 95,
    name: 'Suhajira-10',
    steps: [11, 6, 11, 11, 6, 11, 11, 11, 6, 11],
    aliases: []
  },
  {
    edo: 95,
    name: 'Trisedodge-10',
    steps: [6, 13, 6, 13, 6, 13, 6, 13, 6, 13],
    aliases: []
  },
  {
    edo: 95,
    name: 'Trisedodge-15',
    steps: [6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6, 7],
    aliases: []
  },
  {
    edo: 96,
    name: '"Just" Chromatic',
    steps: [9, 7, 9, 6, 9, 7, 9, 9, 6, 9, 7, 9],
    aliases: []
  },
  {
    edo: 96,
    name: 'Buzurg',
    steps: [11, 18, 11, 10, 6, 11, 18, 11],
    aliases: []
  },
  {
    edo: 96,
    name: 'Buzurg-Hijaz',
    steps: [11, 18, 11, 10, 6, 12, 21, 7],
    aliases: []
  },
  {
    edo: 96,
    name: 'Augene-9',
    steps: [7, 18, 7, 7, 18, 7, 7, 18, 7],
    aliases: []
  },
  {
    edo: 96,
    name: 'Augene-12',
    steps: [7, 7, 11, 7, 7, 7, 11, 7, 7, 7, 11, 7],
    aliases: []
  },
  {
    edo: 96,
    name: 'Augene-15',
    steps: [7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7],
    aliases: []
  },
  {
    edo: 96,
    name: 'Hedgehog-14',
    steps: [9, 4, 9, 9, 4, 9, 4, 9, 4, 9, 9, 4, 9, 4],
    aliases: []
  },
  {
    edo: 96,
    name: 'Octacot-14',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5],
    aliases: []
  },
  {
    edo: 96,
    name: 'Submajor-10',
    steps: [11, 9, 9, 11, 9, 9, 11, 9, 9, 9],
    aliases: []
  },
  {
    edo: 96,
    name: 'Wurschmidt-13',
    steps: [22, 3, 3, 3, 22, 3, 3, 3, 22, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 97,
    name: 'Twelve-tone Chromatic (3/20-comma positive)',
    steps: [11, 6, 6, 11, 6, 11, 6, 11, 6, 6, 11, 6],
    aliases: []
  },
  {
    edo: 97,
    name: 'Flattone-12',
    steps: [4, 11, 11, 4, 11, 4, 11, 11, 4, 11, 4, 11],
    aliases: []
  },
  {
    edo: 97,
    name: 'Galilei-12',
    steps: [8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 97,
    name: 'Marveltri-7',
    steps: [4, 27, 4, 27, 4, 4, 27],
    aliases: []
  },
  {
    edo: 97,
    name: 'Marveltri-13',
    steps: [4, 4, 19, 4, 4, 4, 19, 4, 4, 4, 19, 4, 4],
    aliases: []
  },
  {
    edo: 97,
    name: 'Superkleismic-11',
    steps: [7, 12, 7, 12, 7, 7, 12, 7, 7, 12, 7],
    aliases: []
  },
  {
    edo: 97,
    name: 'Superkleismic-15',
    steps: [5, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7],
    aliases: []
  },
  {
    edo: 98,
    name: 'Meantone Chromatic (5/27-comma)',
    steps: [7, 9, 9, 7, 9, 7, 9, 7, 9, 9, 7, 9],
    aliases: []
  },
  {
    edo: 98,
    name: 'Freivald-11',
    steps: [13, 8, 8, 8, 8, 13, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 98,
    name: 'Freivald-13',
    steps: [5, 8, 8, 8, 8, 8, 5, 8, 8, 8, 8, 8, 8],
    aliases: []
  },
  {
    edo: 98,
    name: 'Lemba-6',
    steps: [19, 11, 19, 19, 11, 19],
    aliases: []
  },
  {
    edo: 98,
    name: 'Lemba-10',
    steps: [11, 8, 11, 8, 11, 11, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 98,
    name: 'Mothra-11',
    steps: [16, 3, 16, 3, 16, 3, 16, 3, 16, 3, 3],
    aliases: []
  },
  {
    edo: 98,
    name: 'Pajara-12',
    steps: [9, 9, 9, 4, 9, 9, 9, 9, 9, 4, 9, 9],
    aliases: []
  },
  {
    edo: 99,
    name: 'Twelve-tone Chromatic (1/20-comma positive)',
    steps: [10, 7, 7, 10, 7, 10, 7, 10, 7, 7, 10, 7],
    aliases: []
  },
  {
    edo: 99,
    name: '"Just" Chromatic',
    steps: [9, 8, 9, 6, 9, 8, 9, 9, 6, 9, 8, 9],
    aliases: []
  },
  {
    edo: 99,
    name: 'Amity-7',
    steps: [15, 13, 15, 13, 15, 15, 13],
    aliases: []
  },
  {
    edo: 99,
    name: 'Greeley-8',
    steps: [8, 13, 13, 13, 13, 13, 13, 13],
    aliases: []
  },
  {
    edo: 99,
    name: 'Greeley-15',
    steps: [8, 8, 5, 8, 5, 8, 5, 8, 5, 8, 5, 8, 5, 8, 5],
    aliases: []
  },
  {
    edo: 99,
    name: 'Hemififths-10',
    steps: [5, 12, 12, 5, 12, 12, 5, 12, 12, 12],
    aliases: []
  },
  {
    edo: 99,
    name: 'Hemithirds-6',
    steps: [16, 16, 16, 16, 16, 19],
    aliases: ['Tutone-6']
  },
  {
    edo: 99,
    name: 'Hemithirds-7',
    steps: [16, 16, 16, 16, 16, 16, 3],
    aliases: ['Tutone-7']
  },
  {
    edo: 99,
    name: 'Hemithirds-13',
    steps: [13, 3, 13, 3, 13, 3, 13, 3, 13, 3, 13, 3, 3],
    aliases: ['Tutone-13']
  },
  {
    edo: 99,
    name: 'Misty-12',
    steps: [8, 8, 9, 8, 8, 8, 9, 8, 8, 8, 9, 8],
    aliases: []
  },
  {
    edo: 99,
    name: 'Parakleismic-11',
    steps: [16, 5, 16, 5, 5, 16, 5, 5, 16, 5, 5],
    aliases: []
  },
  {
    edo: 99,
    name: 'Parakleismic-15',
    steps: [11, 5, 5, 11, 5, 5, 5, 11, 5, 5, 5, 11, 5, 5, 5],
    aliases: []
  },
  {
    edo: 99,
    name: 'Wurschmidt-13',
    steps: [23, 3, 3, 3, 23, 3, 3, 3, 23, 3, 3, 3, 3],
    aliases: []
  },
  {
    edo: 99,
    name: 'Zeus7tri',
    steps: [13, 19, 13, 13, 19, 13, 9],
    aliases: []
  },
  {
    edo: 99,
    name: 'Zeus8tri',
    steps: [13, 13, 13, 15, 13, 13, 13, 6],
    aliases: []
  },
  {
    edo: 100,
    name: 'Archytas Clan-10',
    steps: [13, 7, 13, 7, 13, 7, 13, 7, 13, 7],
    aliases: []
  },
  {
    edo: 100,
    name: 'Archytas Clan-15',
    steps: [6, 7, 7, 6, 7, 7, 6, 7, 7, 6, 7, 7, 6, 7, 7],
    aliases: []
  },
  {
    edo: 100,
    name: 'Baldy-6',
    steps: [17, 15, 17, 17, 17, 17],
    aliases: []
  },
  {
    edo: 100,
    name: 'Baldy-11',
    steps: [15, 2, 15, 2, 15, 2, 15, 15, 2, 15, 2],
    aliases: []
  },
  {
    edo: 100,
    name: 'Blackwood-10',
    steps: [7, 13, 7, 13, 7, 13, 7, 13, 7, 13],
    aliases: []
  },
  {
    edo: 100,
    name: 'Blackwood-15',
    steps: [7, 6, 7, 7, 6, 7, 7, 6, 7, 7, 6, 7, 7, 6, 7],
    aliases: []
  },
  {
    edo: 100,
    name: 'Decimal-10',
    steps: [8, 13, 8, 13, 8, 8, 13, 8, 13, 8],
    aliases: []
  },
  {
    edo: 100,
    name: 'Greeley-8',
    steps: [9, 13, 13, 13, 13, 13, 13, 13],
    aliases: []
  },
  {
    edo: 100,
    name: 'Greeley-15',
    steps: [9, 9, 4, 9, 4, 9, 4, 9, 4, 9, 4, 9, 4, 9, 4],
    aliases: []
  },
  {
    edo: 100,
    name: 'Lemba-6',
    steps: [19, 12, 19, 19, 12, 19],
    aliases: []
  },
  {
    edo: 100,
    name: 'Lemba-10',
    steps: [12, 7, 12, 7, 12, 12, 7, 12, 7, 12],
    aliases: []
  },
  {
    edo: 100,
    name: 'Pajara-12',
    steps: [9, 9, 9, 5, 9, 9, 9, 9, 9, 5, 9, 9],
    aliases: []
  },
  {
    edo: 100,
    name: 'Quasisuper-12',
    steps: [5, 5, 13, 5, 13, 5, 13, 5, 5, 13, 5, 13],
    aliases: []
  },
  {
    edo: 100,
    name: 'Sensi-11',
    steps: [11, 11, 11, 4, 11, 11, 11, 4, 11, 11, 4],
    aliases: []
  },
  {
    edo: 101,
    name: 'Meantone Chromatic (1/22-comma)',
    steps: [9, 8, 8, 9, 8, 9, 8, 9, 8, 8, 9, 8],
    aliases: []
  },
  {
    edo: 101,
    name: 'Genus diatonico-chromaticum',
    steps: [9, 8, 9, 7, 9, 8, 9, 9, 7, 10, 7, 9],
    aliases: []
  },
  {
    edo: 101,
    name: 'Belauensis-14',
    steps: [10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 101,
    name: 'Belauensis-15',
    steps: [3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 101,
    name: 'Magic-7',
    steps: [27, 5, 27, 5, 5, 27, 5],
    aliases: ['Witchcraft-7']
  },
  {
    edo: 101,
    name: 'Magic-10',
    steps: [22, 5, 5, 5, 22, 5, 5, 22, 5, 5],
    aliases: ['Witchcraft-10']
  },
  {
    edo: 101,
    name: 'Magic-13',
    steps: [17, 5, 5, 5, 17, 5, 5, 5, 17, 5, 5, 5, 5],
    aliases: ['Witchcraft-13']
  },
  {
    edo: 101,
    name: 'Spell-7',
    steps: [16, 16, 16, 16, 16, 16, 5],
    aliases: []
  },
  {
    edo: 101,
    name: 'Spell-13',
    steps: [11, 5, 11, 5, 11, 5, 11, 5, 11, 5, 11, 5, 5],
    aliases: []
  },
  {
    edo: 101,
    name: 'Thuja-13',
    steps: [12, 7, 7, 7, 7, 7, 12, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 101,
    name: 'Thuja-15',
    steps: [5, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 102,
    name: 'Echidnic-10',
    steps: [9, 11, 11, 9, 11, 9, 11, 11, 9, 11],
    aliases: []
  },
  {
    edo: 102,
    name: 'Hedgehog-14',
    steps: [9, 5, 9, 9, 5, 9, 5, 9, 5, 9, 9, 5, 9, 5],
    aliases: []
  },
  {
    edo: 102,
    name: 'Hexe-12',
    steps: [10, 7, 10, 7, 10, 7, 10, 7, 10, 7, 10, 7],
    aliases: []
  },
  {
    edo: 102,
    name: 'Kumonga-11',
    steps: [7, 7, 12, 7, 12, 7, 12, 7, 12, 7, 12],
    aliases: []
  },
  {
    edo: 102,
    name: 'Nautilus-14',
    steps: [7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 102,
    name: 'Oodako-9',
    steps: [15, 15, 4, 15, 15, 4, 15, 15, 4],
    aliases: []
  },
  {
    edo: 103,
    name: 'Meantone Chromatic (3/22-comma)',
    steps: [8, 9, 9, 8, 9, 8, 9, 8, 9, 9, 8, 9],
    aliases: []
  },
  {
    edo: 103,
    name: 'Miracle-12',
    steps: [10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 7, 3],
    aliases: []
  },
  {
    edo: 103,
    name: 'Nautilus-14',
    steps: [7, 7, 7, 12, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 103,
    name: 'Sensi-11',
    steps: [11, 11, 11, 5, 11, 11, 11, 5, 11, 11, 5],
    aliases: []
  },
  {
    edo: 103,
    name: 'Superpyth-12',
    steps: [4, 15, 4, 4, 15, 4, 15, 4, 4, 15, 4, 15],
    aliases: []
  },
  {
    edo: 104,
    name: 'Twelve-tone Chromatic (2/23-comma positive)',
    steps: [11, 7, 7, 11, 7, 11, 7, 11, 7, 7, 11, 7],
    aliases: []
  },
  {
    edo: 104,
    name: 'Diaschismic-10',
    steps: [9, 9, 9, 16, 9, 9, 9, 9, 16, 9],
    aliases: []
  },
  {
    edo: 104,
    name: 'Diaschismic-12',
    steps: [9, 9, 9, 7, 9, 9, 9, 9, 9, 7, 9, 9],
    aliases: []
  },
  {
    edo: 104,
    name: 'Magic-7',
    steps: [28, 5, 28, 5, 28, 5, 5],
    aliases: []
  },
  {
    edo: 104,
    name: 'Magic-10',
    steps: [23, 5, 5, 5, 23, 5, 5, 23, 5, 5],
    aliases: []
  },
  {
    edo: 104,
    name: 'Magic-13',
    steps: [18, 5, 5, 5, 18, 5, 5, 5, 18, 5, 5, 5, 5],
    aliases: []
  },
  {
    edo: 105,
    name: 'Meantone Chromatic (2/9-comma)',
    steps: [7, 10, 10, 7, 10, 7, 10, 7, 10, 10, 7, 10],
    aliases: ['Rossi-12']
  },
  {
    edo: 105,
    name: 'Godzilla-9',
    steps: [17, 17, 5, 17, 5, 17, 5, 17, 5],
    aliases: []
  },
  {
    edo: 105,
    name: 'Godzilla-14',
    steps: [12, 5, 12, 5, 5, 12, 5, 5, 12, 5, 5, 12, 5, 5],
    aliases: []
  },
  {
    edo: 106,
    name: 'Bischismic-12',
    steps: [9, 8, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 106,
    name: 'Fleetwood-14',
    steps: [5, 5, 14, 5, 5, 5, 14, 5, 5, 14, 5, 5, 5, 14],
    aliases: []
  },
  {
    edo: 106,
    name: 'Hemiamity-14',
    steps: [9, 7, 7, 9, 7, 7, 7, 9, 7, 7, 9, 7, 7, 7],
    aliases: []
  },
  {
    edo: 106,
    name: 'Injerous-14',
    steps: [8, 8, 8, 8, 8, 5, 8, 8, 8, 8, 8, 8, 5, 8],
    aliases: []
  },
  {
    edo: 106,
    name: 'Ripple-12',
    steps: [9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Suzinak II',
    steps: [11, 23, 10, 18, 11, 23, 10],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Nikriz',
    steps: [18, 11, 26, 7, 18, 8, 8, 10],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Hicazkar I-Kadim',
    steps: [11, 23, 10, 18, 11, 23, 10],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Hicazkar',
    steps: [11, 26, 7, 18, 11, 26, 7],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Isfahan II',
    steps: [14, 5, 7, 11, 7, 18, 8, 8, 10, 18],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Karcigar',
    steps: [14, 2, 10, 18, 11, 23, 10, 18],
    aliases: []
  },
    {
    edo: 106,
    name: 'Makam Araban',
    steps: [14, 2, 10, 18, 11, 5, 10, 8, 10, 18],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Hisar',
    steps: [14, 2, 10, 3, 15, 11, 7, 8, 3, 15, 11, 7],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Kurdi',
    steps: [11, 15, 18, 18, 8, 18, 18],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Hicaz',
    steps: [11, 26, 7, 18, 8, 8, 10, 18],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Humayun',
    steps: [11, 26, 7, 18, 8, 18, 18],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Sahnaz',
    steps: [11, 26, 7, 18, 8, 3, 15, 11, 7],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Buselik',
    steps: [19, 7, 18, 18, 8, 3, 15, 11, 7],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Nisaburek',
    steps: [19, 15, 10, 18, 16, 10, 8, 10],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Huzzam',
    steps: [10, 18, 11, 23, 10, 18, 8, 8],
    aliases: []
  },
  {
    edo: 106,
    name: 'Makam Nisabur',
    steps: [18, 7, 18, 8, 11, 7, 18, 11, 8],
    aliases: []
  },
  {
    edo: 107,
    name: 'Meantone Chromatic (4/13-comma)',
    steps: [6, 11, 11, 6, 11, 6, 11, 6, 11, 11, 6, 11],
    aliases: []
  },
  {
    edo: 107,
    name: 'Laz-13',
    steps: [11, 2, 11, 11, 2, 11, 11, 2, 11, 11, 11, 2, 11],
    aliases: []
  },
  {
    edo: 107,
    name: 'Ripple-12',
    steps: [9, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 107,
    name: 'Sentinel-14',
    steps: [7, 10, 7, 7, 7, 10, 7, 7, 7, 7, 10, 7, 7, 7],
    aliases: []
  },
  {
    edo: 107,
    name: 'Spell-7',
    steps: [17, 17, 17, 17, 17, 17, 5],
    aliases: []
  },
  {
    edo: 107,
    name: 'Spell-13',
    steps: [12, 5, 12, 5, 12, 5, 12, 5, 12, 5, 12, 5, 5],
    aliases: []
  },
  {
    edo: 107,
    name: 'Squares-11',
    steps: [17, 7, 7, 17, 7, 7, 7, 17, 7, 7, 7],
    aliases: []
  },
  {
    edo: 107,
    name: 'Squares-14',
    steps: [10, 7, 7, 7, 10, 7, 7, 7, 7, 10, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 108,
    name: '"Just" Chromatic',
    steps: [10, 8, 10, 7, 10, 8, 10, 10, 7, 10, 8, 10],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Mixolydian',
    steps: [4, 8, 33, 4, 8, 33, 18],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Lydian',
    steps: [8, 33, 4, 8, 33, 18, 4],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Phrygian',
    steps: [33, 4, 8, 33, 18, 4, 8],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Dorian',
    steps: [4, 8, 33, 18, 4, 8, 33],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Hypolydian',
    steps: [8, 33, 18, 4, 8, 33, 4],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Hypophrygian',
    steps: [33, 18, 4, 8, 33, 4, 8],
    aliases: []
  },
  {
    edo: 108,
    name: 'Ratio 1:2 Soft Chromatic Hypodorian',
    steps: [18, 4, 8, 33, 4, 8, 33],
    aliases: []
  },
  {
    edo: 108,
    name: 'Smith\'s Nova',
    steps: [11, 17, 7, 21, 7, 17, 11, 17],
    aliases: []
  },
  {
    edo: 108,
    name: 'Smith\'s Star',
    steps: [7, 21, 7, 21, 7, 17, 11, 17],
    aliases: []
  },
  {
    edo: 108,
    name: 'Unsmate-13',
    steps: [6, 11, 6, 11, 6, 11, 6, 6, 11, 6, 11, 6, 11],
    aliases: []
  },
  {
    edo: 108,
    name: 'Valentine-15',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 7, 7, 7],
    aliases: []
  },
  {
    edo: 109,
    name: 'Meantone Chromatic (7/18-comma)',
    steps: [5, 12, 12, 5, 12, 5, 12, 5, 12, 12, 5, 12],
    aliases: []
  },
  {
    edo: 109,
    name: 'Twelve-tone Chromatic (1/8-comma positive)',
    steps: [12, 7, 7, 12, 7, 12, 7, 12, 7, 7, 12, 7],
    aliases: ['Leapweek-12']
  },
  {
    edo: 109,
    name: '"Just" Chromatic',
    steps: [10, 9, 10, 6, 10, 9, 10, 10, 6, 10, 9, 10],
    aliases: []
  },
  {
    edo: 109,
    name: 'Octacot-14',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5],
    aliases: []
  },
  {
    edo: 109,
    name: 'Tertiaseptal-15',
    steps: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7],
    aliases: []
  },
  {
    edo: 109,
    name: 'Tetracot-7',
    steps: [16, 16, 16, 16, 16, 16, 13],
    aliases: []
  },
  {
    edo: 109,
    name: 'Tetracot-13',
    steps: [3, 13, 3, 13, 3, 13, 3, 13, 13, 3, 13, 3, 13],
    aliases: []
  },
  {
    edo: 110,
    name: 'Lemba-6',
    steps: [21, 13, 21, 21, 13, 21],
    aliases: []
  },
  {
    edo: 110,
    name: 'Lemba-10',
    steps: [13, 8, 13, 8, 13, 13, 8, 13, 8, 13],
    aliases: []
  },
  {
    edo: 110,
    name: 'Secant-14',
    steps: [13, 4, 13, 4, 13, 4, 4, 13, 4, 13, 4, 13, 4, 4],
    aliases: []
  },
  {
    edo: 110,
    name: 'Sentinel-14',
    steps: [7, 11, 7, 7, 7, 11, 7, 7, 7, 7, 11, 7, 7, 7],
    aliases: []
  },
  {
    edo: 110,
    name: 'Squares-11',
    steps: [18, 7, 7, 18, 7, 7, 7, 18, 7, 7, 7],
    aliases: []
  },
  {
    edo: 110,
    name: 'Squares-14',
    steps: [11, 7, 7, 7, 11, 7, 7, 7, 7, 11, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 111,
    name: 'Twelve-tone Chromatic (1/29-comma positive)',
    steps: [11, 8, 8, 11, 8, 11, 8, 11, 8, 8, 11, 8],
    aliases: ['Shrirag-12']
  },
  {
    edo: 111,
    name: '"Just" Chromatic',
    steps: [10, 9, 10, 7, 10, 9, 10, 10, 7, 10, 9, 10],
    aliases: []
  },
  {
    edo: 111,
    name: 'Machine-11',
    steps: [11, 9, 11, 9, 11, 9, 11, 9, 11, 11, 9],
    aliases: []
  },
  {
    edo: 111,
    name: 'Misty-12',
    steps: [9, 9, 10, 9, 9, 9, 10, 9, 9, 9, 10, 9],
    aliases: []
  },
  {
    edo: 111,
    name: 'Schismic-12',
    steps: [8, 11, 8, 8, 11, 8, 11, 8, 8, 11, 8, 11],
    aliases: []
  },
  {
    edo: 111,
    name: 'Semisept-13',
    steps: [11, 7, 11, 7, 7, 11, 7, 11, 7, 7, 11, 7, 7],
    aliases: []
  },
  {
    edo: 111,
    name: 'Sensi-11',
    steps: [12, 12, 12, 5, 12, 12, 12, 5, 12, 12, 5],
    aliases: []
  },
  {
    edo: 112,
    name: 'Meantone Chromatic (7/27-comma)',
    steps: [7, 11, 11, 7, 11, 7, 11, 7, 11, 11, 7, 11],
    aliases: ['Meanpop-12']
  },
  {
    edo: 112,
    name: 'Blackbirds-12',
    steps: [5, 18, 5, 5, 18, 5, 5, 18, 5, 5, 18, 5],
    aliases: []
  },
  {
    edo: 112,
    name: 'Injera-12',
    steps: [9, 9, 9, 9, 9, 11, 9, 9, 9, 9, 9, 11],
    aliases: []
  },
  {
    edo: 112,
    name: 'Injera-14',
    steps: [9, 9, 9, 9, 9, 9, 2, 9, 9, 9, 9, 9, 9, 2],
    aliases: []
  },
  {
    edo: 112,
    name: 'Septimal-14',
    steps: [9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7],
    aliases: []
  },
  {
    edo: 112,
    name: 'Stacks-11',
    steps: [11, 8, 11, 11, 11, 8, 11, 11, 8, 11, 11],
    aliases: []
  },
  {
    edo: 113,
    name: 'Meantone Chromatic (1/20-comma)',
    steps: [9, 10, 10, 9, 10, 9, 10, 9, 10, 10, 9, 10],
    aliases: ['Melkis-12']
  },
  {
    edo: 113,
    name: 'Amity-7',
    steps: [17, 15, 17, 15, 17, 17, 15],
    aliases: []
  },
  {
    edo: 113,
    name: 'Kumonga-11',
    steps: [8, 8, 13, 8, 13, 8, 13, 8, 13, 8, 13],
    aliases: []
  },
  {
    edo: 113,
    name: 'Miracle-12',
    steps: [11, 11, 11, 11, 11, 11, 11, 11, 11, 3, 8, 3],
    aliases: []
  },
  {
    edo: 113,
    name: 'Mohajira-10',
    steps: [5, 14, 14, 5, 14, 14, 14, 5, 14, 14],
    aliases: []
  },
  {
    edo: 113,
    name: 'Spell-7',
    steps: [18, 18, 18, 18, 18, 18, 5],
    aliases: []
  },
  {
    edo: 113,
    name: 'Spell-13',
    steps: [13, 5, 13, 5, 13, 5, 13, 5, 13, 5, 13, 5, 5],
    aliases: []
  },
  {
    edo: 114,
    name: 'Twelve-tone Chromatic (2/13-comma positive)',
    steps: [13, 7, 7, 13, 7, 13, 7, 13, 7, 7, 13, 7],
    aliases: []
  },
  {
    edo: 114,
    name: 'Diaschismic-12',
    steps: [10, 10, 10, 7, 10, 10, 10, 10, 10, 7, 10, 10],
    aliases: []
  },
  {
    edo: 114,
    name: 'Hexe-12',
    steps: [11, 8, 11, 8, 11, 8, 11, 8, 11, 8, 11, 8],
    aliases: []
  },
  {
    edo: 115,
    name: 'Meantone Chromatic (3/23-comma)',
    steps: [9, 10, 10, 9, 10, 9, 10, 9, 10, 10, 9, 10],
    aliases: ['Preston-12']
  },
  {
    edo: 115,
    name: 'Orwell-13',
    steps: [4, 11, 11, 4, 11, 11, 4, 11, 11, 4, 11, 11, 11],
    aliases: []
  },
  {
    edo: 115,
    name: 'Slurpee-15',
    steps: [17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 115,
    name: 'Trisedodge-10',
    steps: [7, 16, 7, 16, 7, 16, 7, 16, 7, 16],
    aliases: []
  },
  {
    edo: 115,
    name: 'Trisedodge-15',
    steps: [7, 7, 9, 7, 7, 9, 7, 7, 9, 7, 7, 9, 7, 7, 9],
    aliases: []
  },
  {
    edo: 116,
    name: 'Meantone Chromatic (7/17-comma)',
    steps: [5, 13, 13, 5, 13, 5, 13, 5, 13, 13, 5, 13],
    aliases: []
  },
  {
    edo: 116,
    name: '"Just" Chromatic',
    steps: [11, 9, 11, 6, 11, 9, 11, 11, 6, 11, 9, 11],
    aliases: []
  },
  {
    edo: 116,
    name: 'Tetracot-7',
    steps: [17, 17, 17, 17, 17, 17, 14],
    aliases: []
  },
  {
    edo: 116,
    name: 'Tetracot-13',
    steps: [3, 14, 3, 14, 3, 14, 3, 14, 14, 3, 14, 3, 14],
    aliases: []
  },
  {
    edo: 117,
    name: 'Meantone Chromatic (4/19-comma)',
    steps: [8, 11, 11, 8, 11, 8, 11, 8, 11, 11, 8, 11],
    aliases: ['Meridetone-12']
  },
  {
    edo: 117,
    name: 'Migration-10',
    steps: [4, 15, 15, 4, 15, 15, 4, 15, 15, 15],
    aliases: []
  },
  {
    edo: 117,
    name: 'Mohajira-10',
    steps: [4, 15, 15, 4, 15, 15, 15, 4, 15, 15],
    aliases: []
  },
  {
    edo: 118,
    name: 'Meantone Chromatic (1/83-comma)',
    steps: [11, 9, 9, 11, 9, 11, 9, 11, 9, 9, 11, 9],
    aliases: ['Helmholtz-12']
  },
  {
    edo: 118,
    name: '"Just" Chromatic',
    steps: [11, 9, 11, 7, 11, 9, 11, 11, 7, 11, 9, 11],
    aliases: []
  },
  {
    edo: 118,
    name: 'Doublewide-10',
    steps: [5, 22, 5, 22, 5, 5, 22, 5, 22, 5],
    aliases: []
  },
  {
    edo: 118,
    name: 'Doublewide-14',
    steps: [5, 5, 17, 5, 5, 17, 5, 5, 5, 17, 5, 5, 17, 5],
    aliases: []
  },
  {
    edo: 118,
    name: 'Hedgehog-14',
    steps: [11, 5, 11, 11, 5, 11, 5, 11, 5, 11, 11, 5, 11, 5],
    aliases: []
  },
  {
    edo: 118,
    name: 'Hemithirds-6',
    steps: [19, 19, 19, 19, 19, 23],
    aliases: []
  },
  {
    edo: 118,
    name: 'Hemithirds-7',
    steps: [19, 19, 19, 19, 19, 19, 4],
    aliases: []
  },
  {
    edo: 118,
    name: 'Hemithirds-13',
    steps: [15, 4, 15, 4, 15, 4, 15, 4, 15, 4, 15, 4, 4],
    aliases: []
  },
  {
    edo: 118,
    name: 'Rodan-5',
    steps: [23, 23, 23, 26, 23],
    aliases: []
  },
  {
    edo: 118,
    name: 'Rodan-11',
    steps: [20, 3, 20, 3, 20, 3, 20, 3, 3, 20, 3],
    aliases: []
  },
  {
    edo: 118,
    name: 'Schismic-12',
    steps: [9, 11, 9, 9, 11, 9, 11, 9, 9, 11, 9, 11],
    aliases: []
  },
  {
    edo: 118,
    name: 'Vishnu-14',
    steps: [17, 7, 7, 7, 7, 7, 7, 17, 7, 7, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 119,
    name: 'Meantone Chromatic (2/7-comma)',
    steps: [7, 12, 12, 7, 12, 7, 12, 7, 12, 12, 7, 12],
    aliases: ['Zarlino']
  },
  {
    edo: 119,
    name: 'Ripple-12',
    steps: [10, 10, 10, 9, 10, 10, 10, 10, 10, 10, 10, 10],
    aliases: []
  },
  {
    edo: 119,
    name: 'Sensi-11',
    steps: [13, 13, 13, 5, 13, 13, 13, 5, 13, 13, 5],
    aliases: []
  },
  {
    edo: 120,
    name: 'Myna-11',
    steps: [4, 23, 4, 4, 23, 4, 23, 4, 4, 23, 4],
    aliases: []
  },
  {
    edo: 120,
    name: 'Myna-15',
    steps: [4, 4, 19, 4, 4, 4, 19, 4, 4, 4, 19, 4, 4, 19, 4],
    aliases: []
  },
  {
    edo: 120,
    name: 'Pajara-12',
    steps: [11, 11, 11, 5, 11, 11, 11, 11, 11, 5, 11, 11],
    aliases: []
  },
  {
    edo: 120,
    name: 'Superpyth-12',
    steps: [5, 17, 5, 5, 17, 5, 17, 5, 5, 17, 5, 17],
    aliases: []
  },
  {
    edo: 121,
    name: 'Twelve-tone Chromatic (1/10-comma positive)',
    steps: [13, 8, 8, 13, 8, 13, 8, 13, 8, 8, 13, 8],
    aliases: ['Leapday-12']
  },
  {
    edo: 121,
    name: '"Just" Chromatic',
    steps: [11, 10, 11, 7, 11, 10, 11, 11, 7, 11, 10, 11],
    aliases: []
  },
  {
    edo: 121,
    name: 'Golden-13',
    steps: [10, 10, 7, 10, 10, 10, 7, 10, 10, 10, 7, 10, 10],
    aliases: []
  },
  {
    edo: 121,
    name: 'Hemikleismic-15',
    steps: [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 9],
    aliases: []
  },
  {
    edo: 121,
    name: 'Kleismic-7',
    steps: [7, 25, 7, 25, 7, 25, 25],
    aliases: []
  },
  {
    edo: 121,
    name: 'Kleismic-11',
    steps: [7, 7, 18, 7, 18, 7, 7, 18, 7, 7, 18],
    aliases: []
  },
  {
    edo: 121,
    name: 'Kleismic-15',
    steps: [7, 7, 7, 11, 7, 7, 7, 11, 7, 7, 7, 11, 7, 7, 11],
    aliases: []
  },
  {
    edo: 121,
    name: 'Ptolemy-7',
    steps: [19, 16, 19, 16, 19, 16, 16],
    aliases: []
  },
  {
    edo: 122,
    name: 'Meantone Chromatic (1/6-comma)',
    steps: [9, 11, 11, 9, 11, 9, 11, 9, 11, 11, 9, 11],
    aliases: ['Evelyne-12']
  },
  {
    edo: 122,
    name: 'Astrology-10',
    steps: [17, 5, 17, 17, 5, 17, 5, 17, 17, 5],
    aliases: []
  },
  {
    edo: 122,
    name: 'Marveltri-7',
    steps: [5, 34, 5, 34, 5, 5, 34],
    aliases: []
  },
  {
    edo: 122,
    name: 'Marveltri-13',
    steps: [5, 5, 24, 5, 5, 5, 24, 5, 5, 5, 24, 5, 5],
    aliases: []
  },
  {
    edo: 122,
    name: 'Pajara-12',
    steps: [11, 11, 11, 6, 11, 11, 11, 11, 11, 6, 11, 11],
    aliases: []
  },
  {
    edo: 123,
    name: 'Oodako-9',
    steps: [18, 18, 5, 18, 18, 5, 18, 18, 5],
    aliases: []
  },
  {
    edo: 123,
    name: 'Ternary-15',
    steps: [10, 7, 7, 10, 7, 10, 7, 7, 10, 7, 10, 7, 7, 10, 7],
    aliases: []
  },
  {
    edo: 123,
    name: 'Valentine-15',
    steps: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 11, 8, 8, 8],
    aliases: []
  },
  {
    edo: 123,
    name: 'Wilson Golden-11',
    steps: [13, 13, 8, 13, 13, 8, 13, 13, 8, 13, 8],
    aliases: []
  },
  {
    edo: 124,
    name: 'Twelve-tone Chromatic (5/24-comma positive)',
    steps: [15, 7, 7, 15, 7, 15, 7, 15, 7, 7, 15, 7],
    aliases: []
  },
  {
    edo: 124,
    name: 'Hedgehog-14',
    steps: [11, 6, 11, 11, 6, 11, 6, 11, 6, 11, 11, 6, 11, 6],
    aliases: []
  },
  {
    edo: 124,
    name: 'Injerous-14',
    steps: [9, 9, 9, 9, 9, 8, 9, 9, 9, 9, 9, 9, 8, 9],
    aliases: []
  },
  {
    edo: 125,
    name: 'Meantone Chromatic (1/2-comma)',
    steps: [4, 15, 15, 4, 15, 4, 15, 4, 15, 15, 4, 15],
    aliases: []
  },
  {
    edo: 125,
    name: '"Just" Chromatic',
    steps: [12, 9, 12, 7, 12, 9, 12, 12, 7, 12, 9, 12],
    aliases: []
  },
  {
    edo: 125,
    name: 'Iranian Diatonic',
    steps: [23, 23, 5, 23, 23, 5, 23],
    aliases: []
  },
  {
    edo: 125,
    name: 'Catakleismic-15',
    steps: [7, 7, 7, 12, 7, 7, 7, 12, 7, 7, 7, 12, 7, 7, 12],
    aliases: []
  },
  {
    edo: 125,
    name: 'Marvel-12',
    steps: [12, 9, 12, 7, 12, 9, 12, 12, 12, 4, 12, 12],
    aliases: []
  },
  {
    edo: 126,
    name: 'Meantone Chromatic (5/16-comma)',
    steps: [7, 13, 13, 7, 13, 7, 13, 7, 13, 13, 7, 13],
    aliases: []
  },
  {
    edo: 126,
    name: 'Anguirus-14',
    steps: [11, 4, 11, 11, 4, 11, 11, 11, 4, 11, 11, 4, 11, 11],
    aliases: []
  },
  {
    edo: 126,
    name: 'Astrology-10',
    steps: [17, 6, 17, 17, 6, 17, 6, 17, 17, 6],
    aliases: []
  },
  {
    edo: 126,
    name: 'Diaschismic-12',
    steps: [11, 11, 11, 8, 11, 11, 11, 11, 11, 8, 11, 11],
    aliases: []
  },
  {
    edo: 126,
    name: 'Porcupine-7',
    steps: [17, 17, 17, 24, 17, 17, 17],
    aliases: []
  },
  {
    edo: 126,
    name: 'Porcupine-8',
    steps: [17, 17, 17, 17, 17, 17, 17, 7],
    aliases: []
  },
  {
    edo: 127,
    name: 'Sentinel-14',
    steps: [8, 13, 8, 8, 8, 13, 8, 8, 8, 8, 13, 8, 8, 8],
    aliases: []
  },
  {
    edo: 128,
    name: 'Twelve-tone Chromatic (1/18-comma positive)',
    steps: [13, 9, 9, 13, 9, 13, 9, 13, 9, 9, 13, 9],
    aliases: []
  },
  {
    edo: 128,
    name: '"Just" Chromatic',
    steps: [12, 10, 12, 7, 12, 10, 12, 12, 7, 12, 10, 12],
    aliases: []
  },
  {
    edo: 128,
    name: 'Ptolemy-7',
    steps: [20, 17, 20, 17, 20, 17, 17],
    aliases: []
  },
  {
    edo: 128,
    name: 'Rodan-5',
    steps: [25, 25, 25, 28, 25],
    aliases: []
  },
  {
    edo: 128,
    name: 'Rodan-11',
    steps: [22, 3, 22, 3, 22, 3, 22, 3, 3, 22, 3],
    aliases: []
  },
  {
    edo: 129,
    name: 'Oodako-9',
    steps: [19, 19, 5, 19, 19, 5, 19, 19, 5],
    aliases: []
  },
  {
    edo: 130,
    name: 'Belauensis-14',
    steps: [13, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 130,
    name: 'Belauensis-15',
    steps: [4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 131,
    name: 'Golden Meantone Chromatic',
    steps: [8, 13, 13, 8, 13, 8, 13, 8, 13, 13, 8, 13],
    aliases: []
  },
  {
    edo: 131,
    name: 'Mohaha-7',
    steps: [21, 17, 21, 17, 21, 17, 17],
    aliases: []
  },
  {
    edo: 131,
    name: 'Nautilus-14',
    steps: [9, 9, 9, 14, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 133,
    name: 'Twelve-tone Chromatic (1/12-comma positive)',
    steps: [14, 9, 9, 14, 9, 14, 9, 14, 9, 9, 14, 9],
    aliases: ['Wustaf-12']
  },
  {
    edo: 133,
    name: 'Miracle-12',
    steps: [13, 13, 13, 13, 13, 13, 13, 13, 13, 3, 10, 3],
    aliases: []
  },
  {
    edo: 134,
    name: 'Semimiracle-12',
    steps: [13, 13, 13, 2, 13, 13, 13, 13, 13, 2, 13, 13],
    aliases: []
  },
  {
    edo: 135,
    name: '"Just" Chromatic',
    steps: [13, 10, 13, 7, 13, 10, 13, 13, 7, 13, 10, 13],
    aliases: []
  },
  {
    edo: 136,
    name: 'Meantone Chromatic (5/22-comma)',
    steps: [9, 13, 13, 9, 13, 9, 13, 9, 13, 13, 9, 13],
    aliases: ['Wallaby-12']
  },
  {
    edo: 137,
    name: '"Just" Chromatic',
    steps: [13, 10, 13, 8, 13, 10, 13, 13, 8, 13, 10, 13],
    aliases: []
  },
  {
    edo: 137,
    name: 'Orwell-13',
    steps: [5, 13, 13, 5, 13, 13, 5, 13, 13, 5, 13, 13, 13],
    aliases: []
  },
  {
    edo: 138,
    name: 'Sentinel-14',
    steps: [9, 13, 9, 9, 9, 13, 9, 9, 9, 9, 13, 9, 9, 9],
    aliases: []
  },
  {
    edo: 138,
    name: 'Terrain-9',
    steps: [4, 21, 21, 4, 21, 21, 4, 21, 21],
    aliases: []
  },
  {
    edo: 138,
    name: 'Terrain-15',
    steps: [4, 17, 4, 17, 4, 4, 17, 4, 17, 4, 4, 17, 4, 17, 4],
    aliases: []
  },
  {
    edo: 139,
    name: 'Valentine-15',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 9, 9, 9],
    aliases: []
  },
  {
    edo: 140,
    name: '"Just" Chromatic',
    steps: [13, 11, 13, 8, 13, 11, 13, 13, 8, 13, 11, 13],
    aliases: []
  },
  {
    edo: 140,
    name: 'Hemififths-10',
    steps: [7, 17, 17, 7, 17, 17, 7, 17, 17, 17],
    aliases: []
  },
  {
    edo: 140,
    name: 'Kleismic-7',
    steps: [8, 29, 8, 29, 8, 29, 29],
    aliases: []
  },
  {
    edo: 140,
    name: 'Kleismic-11',
    steps: [8, 8, 21, 8, 21, 8, 8, 21, 8, 8, 21],
    aliases: []
  },
  {
    edo: 140,
    name: 'Kleismic-15',
    steps: [8, 8, 8, 13, 8, 8, 8, 13, 8, 8, 8, 13, 8, 8, 13],
    aliases: []
  },
  {
    edo: 140,
    name: 'Tertiaseptal-15',
    steps: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 9, 9, 9],
    aliases: []
  },
  {
    edo: 141,
    name: 'Mohajira-10',
    steps: [5, 18, 18, 5, 18, 18, 18, 5, 18, 18],
    aliases: []
  },
  {
    edo: 141,
    name: 'Sentinel-14',
    steps: [9, 14, 9, 9, 9, 14, 9, 9, 9, 9, 14, 9, 9, 9],
    aliases: []
  },
  {
    edo: 143,
    name: 'Meantone Chromatic (19/75-comma)',
    steps: [9, 14, 14, 9, 14, 9, 14, 9, 14, 14, 9, 14],
    aliases: []
  },
  {
    edo: 144,
    name: 'Pajara-12',
    steps: [13, 13, 13, 7, 13, 13, 13, 13, 13, 7, 13, 13],
    aliases: []
  },
  {
    edo: 144,
    name: 'Phi-12',
    steps: [8, 13, 13, 8, 13, 8, 13, 13, 8, 13, 13, 8, 13],
    aliases: []
  },
  {
    edo: 144,
    name: 'Quasisuper-12',
    steps: [7, 7, 19, 7, 19, 7, 19, 7, 7, 19, 7, 19],
    aliases: []
  },
  {
    edo: 145,
    name: 'Meantone Chromatic (6/19-comma)',
    steps: [8, 15, 15, 8, 15, 8, 15, 8, 15, 15, 8, 15],
    aliases: ['Meanenneadecal-12']
  },
  {
    edo: 145,
    name: 'Amity-7',
    steps: [22, 19, 22, 19, 22, 22, 19],
    aliases: []
  },
  {
    edo: 145,
    name: 'Magic-7',
    steps: [39, 7, 39, 7, 39, 7, 7],
    aliases: []
  },
  {
    edo: 145,
    name: 'Magic-10',
    steps: [32, 7, 7, 7, 32, 7, 7, 32, 7, 7],
    aliases: []
  },
  {
    edo: 145,
    name: 'Magic-13',
    steps: [25, 7, 7, 7, 25, 7, 7, 7, 25, 7, 7, 7, 7],
    aliases: []
  },
  {
    edo: 147,
    name: '"Just" Chromatic',
    steps: [14, 11, 14, 8, 14, 11, 14, 14, 8, 14, 11, 14],
    aliases: []
  },
  {
    edo: 147,
    name: 'Baldy-6',
    steps: [25, 22, 25, 25, 25, 25],
    aliases: []
  },
  {
    edo: 147,
    name: 'Baldy-11',
    steps: [22, 3, 22, 3, 22, 3, 22, 22, 3, 22, 3],
    aliases: []
  },
  {
    edo: 148,
    name: 'Migration-10',
    steps: [5, 19, 19, 5, 19, 19, 5, 19, 19, 19],
    aliases: []
  },
  {
    edo: 148,
    name: 'Mohajira-10',
    steps: [5, 19, 19, 5, 19, 19, 19, 5, 19, 19],
    aliases: []
  },
  {
    edo: 149,
    name: '"Just" Chromatic',
    steps: [14, 11, 14, 9, 14, 11, 14, 14, 9, 14, 11, 14],
    aliases: []
  },
  {
    edo: 150,
    name: 'Morrison Octacot-14',
    steps: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7],
    aliases: []
  },
  {
    edo: 151,
    name: 'Twelve-tone Chromatic (1/4-comma positive)',
    steps: [19, 8, 8, 19, 8, 19, 8, 19, 8, 8, 19, 8],
    aliases: ['Reverse Meantone-12']
  },
  {
    edo: 152,
    name: '"Just" Chromatic',
    steps: [14, 12, 14, 9, 14, 12, 14, 14, 9, 14, 12, 14],
    aliases: []
  },
  {
    edo: 152,
    name: 'Amity-7',
    steps: [23, 20, 23, 20, 23, 23, 20],
    aliases: []
  },
  {
    edo: 152,
    name: 'Vishnu-14',
    steps: [22, 9, 9, 9, 9, 9, 9, 22, 9, 9, 9, 9, 9, 9],
    aliases: []
  },
  {
    edo: 159,
    name: 'Yarman-12',
    steps: [13, 13, 16, 9, 16, 11, 14, 15, 11, 16, 9, 16],
    aliases: []
  },
  {
    edo: 162,
    name: '"Just" Chromatic',
    steps: [15, 13, 15, 9, 15, 13, 15, 15, 9, 15, 13, 15],
    aliases: []
  },
  {
    edo: 164,
    name: 'Meantone Chromatic (7/22-comma)',
    steps: [9, 17, 17, 9, 17, 9, 17, 9, 17, 17, 9, 17],
    aliases: []
  },
  {
    edo: 166,
    name: 'Marvel-12',
    steps: [16, 12, 16, 9, 16, 12, 16, 16, 16, 5, 16, 16],
    aliases: []
  },
  {
    edo: 166,
    name: 'Hecatehex',
    steps: [28, 25, 28, 25, 28, 32],
    aliases: []
  },
  {
    edo: 166,
    name: 'Marveldene',
    steps: [16, 12, 16, 9, 16, 12, 16, 16, 9, 19, 9, 16],
    aliases: []
  },
  {
    edo: 171,
    name: 'Terrain-9',
    steps: [5, 26, 26, 5, 26, 26, 5, 26, 26],
    aliases: []
  },
  {
    edo: 171,
    name: 'Terrain-15',
    steps: [5, 21, 5, 21, 5, 5, 21, 5, 21, 5, 5, 21, 5, 21, 5],
    aliases: []
  },
  {
    edo: 174,
    name: 'Injera-14',
    steps: [14, 14, 14, 14, 14, 14, 3, 14, 14, 14, 14, 14, 14, 3],
    aliases: []
  },
  {
    edo: 174,
    name: 'Injerous-14',
    steps: [13, 13, 13, 13, 13, 9, 13, 13, 13, 13, 13, 13, 9, 13],
    aliases: []
  },
  {
    edo: 175,
    name: 'Miracle-12',
    steps: [17, 17, 17, 17, 17, 17, 17, 17, 17, 5, 12, 5],
    aliases: []
  },
  {
    edo: 177,
    name: 'Octacot-14',
    steps: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 8],
    aliases: []
  },
  {
    edo: 180,
    name: 'Blackbirds-12',
    steps: [8, 29, 8, 8, 29, 8, 8, 29, 8, 8, 29, 8],
    aliases: []
  },
  {
    edo: 190,
    name: 'Maxx',
    steps: [37, 24, 37, 13, 37, 5, 37],
    aliases: []
  },
  {
    edo: 190,
    name: 'Septicyc',
    steps: [24, 13, 24, 13, 5, 32, 5, 24, 13, 24, 13],
    aliases: []
  },
  {
    edo: 197,
    name: 'Double Harmonic Major',
    steps: [19, 44, 19, 33, 19, 44, 19],
    aliases: ['Major Gipsy']
  },
  {
    edo: 197,
    name: 'Marvel-12',
    steps: [19, 14, 19, 11, 19, 14, 19, 19, 19, 6, 19, 19],
    aliases: []
  },
  {
    edo: 202,
    name: 'Oktone',
    steps: [20, 39, 6, 39, 14, 39, 6, 39],
    aliases: []
  },
  {
    edo: 205,
    name: 'Amity-7',
    steps: [31, 27, 31, 27, 31, 31, 27],
    aliases: []
  }
];
