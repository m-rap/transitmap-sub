function initData() {
  data = 
    [
      {
        nama: 'BM',
        berangkat: [{
          request: {
            origin: 'Terminal Bratang', 
            destination: 'Terminal Menanggal',
            waypoints: [
              {location: {lat: -7.31971475348524, lng: 112.74913966655731}, stopover: false}, // tenggilis barat
              {location: {lat: -7.321728967027757, lng: 112.7580177783966}, stopover: false}, // tenggilis mulya
              {location: {lat: -7.329939361952735, lng: 112.7487587928772}, stopover: false}, // kutisari utara
              {location: {lat: -7.347884649825112, lng: 112.72806286811829}, stopover: false}, // putar bundaran waru
              {location: {lat: -7.336009436747849, lng: 112.72907137870789}, stopover: false}, // gayungan ptt
              {location: {lat: -7.334338794417834, lng: 112.72493004798889}, stopover: false}, // gayungsari i
              {location: {lat: -7.338893142192041, lng: 112.71773099899292}, stopover: false}, // wisma pagesangan i
              {location: {lat: -7.341319271039199, lng: 112.72087454795837}, stopover: false}, // cipta menanggal
            ],
            optimizeWaypoints: false
          },
          color: '#61bb46'
        }],
        kembali: [{
          request: {
            origin: 'Terminal Menanggal', 
            destination: 'Terminal Bratang',
            waypoints: [
              {location: {lat: -7.341319271039199, lng: 112.72087454795837}, stopover: false}, // cipta menanggal
              {location: {lat: -7.338893142192041, lng: 112.71773099899292}, stopover: false}, // wisma pagesangan i
              {location: {lat: -7.334338794417834, lng: 112.72493004798889}, stopover: false}, // gayungsari i
              {location: {lat: -7.336009436747849, lng: 112.72907137870789}, stopover: false}, // gayungan ptt
              {location: {lat: -7.329939361952735, lng: 112.7487587928772}, stopover: false}, // kutisari utara
              {location: {lat: -7.328730923688478, lng: 112.74462819099426}, stopover: false}, // raya kendangsari
              {location: {lat: -7.328866266276798, lng: 112.74478375911713}, stopover: false}, // putar raya kendangsari
              {location: {lat: -7.323237044019694, lng: 112.74788975715637}, stopover: false}, // kendangsari
              {location: {lat: -7.321728967027757, lng: 112.7580177783966}, stopover: false}, // tenggilis mulya
              {location: {lat: -7.321193906070934, lng: 112.7487963438034}, stopover: false}, // tenggilis
              {location: {lat: -7.319911619400143, lng: 112.74740695953369}, stopover: false}, // jemursari
            ],
            optimizeWaypoints: false
          },
          color: '#61bb46'
        }],
      },
      {
        nama: 'V',
        berangkat: [{
          request: {
            origin: 'Terminal Joyoboyo', 
            destination: 'Jl. Tambak Rejo',
            waypoints: [
              {location: {lat: -7.259998861325057, lng: 112.7487587928772}, stopover: false}, // wijaya kusuma
              {location: {lat: -7.248674756201677, lng: 112.75976657867432}, stopover: false}, // tambak segaran wetan
            ],
            optimizeWaypoints: false
          },
          color: '#eeb211'
        }],
        kembali: [{
          request: {
            origin: 'Jl. Tambak Rejo', 
            destination: 'Terminal Joyoboyo',
            waypoints: [
              {location: {lat: -7.246806890071356, lng: 112.75890290737152}, stopover: false}, // tambak segaran
              {location: {lat: -7.24837674958899, lng: 112.76243805885315}, stopover: false}, // rangkah besar
              {location: {lat: -7.259998861325057, lng: 112.7487587928772}, stopover: false}, // wijaya kusuma
              {location: {lat: -7.307239861748596, lng: 112.73531019687653}, stopover: false}, // putar balik
            ],
            optimizeWaypoints: false
          },
          color: '#eeb211'
        }],
      },
      {
        nama: 'G',
        berangkat: [{
          request: {
            origin: 'Terminal Joyoboyo', 
            destination: {lat: -7.266504239227583, lng: 112.76083409786224}, // karang menjangan
            waypoints: [
              {location: {lat: -7.295097516565724, lng: 112.73362308740616}, stopover: false}, // ciliwung
              {location: {lat: -7.295187973467072, lng: 112.73264408111572}, stopover: false}, // adityawarman
              {location: {lat: -7.29189426627404, lng: 112.72911429405212}, stopover: false}, // patmosusastro
              {location: {lat: -7.279860921538657, lng: 112.74188160896301}, stopover: false}, // sriwijaya
              {location: {lat: -7.272394917353678, lng: 112.74935156106949}, stopover: false}, // bangka
              {location: {lat: -7.277495320133082, lng: 112.75199890136719}, stopover: false}, // kertajaya
              {location: {lat: -7.278687268189972, lng: 112.76223421096802}, stopover: false}, // raya menur
            ],
            optimizeWaypoints: false
          },
          color: '#bdd09f'
        }],
        kembali: [{
          request: {
            origin: {lat: -7.266511556061784, lng: 112.7608897536993}, // karang menjangan 
            destination: {lat: -7.295532507673926, lng: 112.73328378796577}, // adityawarman 1
            waypoints: [
              {location: {lat: -7.280230410523453, lng: 112.76830673217773}, stopover: false}, // manyar kertoarjo
              {location: {lat: -7.272844563955261, lng: 112.74493932723999}, stopover: false}, // karimun jawa
              {location: {lat: -7.292407745645709, lng: 112.73001551628113}, stopover: false}, // indragiri
            ],
            optimizeWaypoints: false
          },
          color: '#bdd09f'
        }, {
          request: {
            origin: {lat: -7.29560833176879, lng: 112.733234167099}, // adityawarman 2
            destination: 'Terminal Joyoboyo',
            waypoints: [
              {location: {lat: -7.298087905615413, lng: 112.72976875305176}, stopover: false}, // brawijaya
            ],
            optimizeWaypoints: false
          },
          color: '#bdd09f'
        }],
      },
    ];
}