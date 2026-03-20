// County WFS service definitions extracted from the EGIB_POLSKA repository
// Each entry contains the county name, voivodeship, WFS URL, layer name, format and version
const POWIATY =  [
            /////warminsko_mazurskie //////
            {
            'powiat': 'Starosta Powiatu Olsztyńskiego',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'http://powiatolsztynski.geoportal2.pl/map/geoportal/wms.php?',
            'layer_name': 'dzialki',
            'format': 'text/xml',
            'version': '2.0.0'
            },
            {
            'powiat': 'Bartoszycki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatbartoszyce.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Braniewski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiat-braniewo.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Działdowski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatdzialdowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Elblaski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://ikerg.powiat.elblag.pl/elblaski-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ełcki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatelk.geoportal2.pl/map/geoportal/wfs.php',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Giżycki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/gizycko?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Gołdapski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatgoldap.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Iławski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://ilawa.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kętrzyński',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatketrzynski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lidzbarski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatlidzbarski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Mrągowski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/mragowo?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nidzicki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatnidzicki.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Olecki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'http://olecko.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Olsztyński',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatolsztynski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostródzki',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://ostroda.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Piski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://powiatpiski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Szczycieński',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'http://szczytno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/json',
            'version': '2.0.0'
            },
            {
            'powiat': 'Węgorzewski',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/wegorzewo?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Elbląg',
            'woj': 'warminsko_mazurskie',
            'wfs_url': 'https://wms.geodezja.elblag.eu/elblag-wms?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            /////////Dolnoslaskie //////////////
            {
            'powiat': 'Bolesławiecki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://geoportal.powiatboleslawiecki.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Dzierżoniowski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://geoportal.pow.dzierzoniow.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Głogowski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://glogow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Góra',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://gora.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Jaworski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://jawor.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Jeleniogórski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wms.podgik.jgora.pl/jeleniagora-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Kamiennogórski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wms.kamienna-gora.pl/kamiennagora-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Kłodzki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://geoportal.powiat.klodzko.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Legnicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://legnicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Lubański',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://iegib.powiatluban.pl/luban-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Lubiński',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://lubinski-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Milicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://ikerg.powiatlwowecki.pl/lwowekslaski-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Oleśnicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://olesnicki.webewid.pl:4444/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Oławski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://ewid.starostwo.olawa.pl:4444/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Polkowicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://polkowicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Strzeliński',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://strzelinski-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Średzki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/0218?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Świdnicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://swidnicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Trzebnicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://trzebnicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Wałbrzyski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://walbrzyski-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Wołowski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wolowski-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Wrocławski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wms.wrosip.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Ząbkowicki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://zabkowicki.webewid.pl:444/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Zgorzelecki',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://iegib.powiat.zgorzelec.pl/zgorzelec-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Złotoryjski',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wms.powiat-zlotoryja.pl/zlotoryja-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Wrocław (miasto na prawach powiatu)',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://iwms.zgkikm.wroc.pl/wroclaw-egib?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Wałbrzych (miasto na prawach powiatu)',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://walbrzych-wms.webewid.pl/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Legnica (miasto na prawach powiatu)',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://wms.legnica.eu/iip/ows?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Jelenia Góra (miasto na prawach powiatu)',
            'woj': 'dolnoslaskie',
            'wfs_url': 'https://geoportal.jeleniagora.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              //////////Mazowieckie /////////////////
            {
            'powiat': 'Białobrzeski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://bialobrzegi.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ciechanowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://ciechanow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Garwoliński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://garwolinski.geoportal2.pl:8443/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Gostyniński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://gostynin.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Grodziski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://imapa.podgik-grodziskm.pl/grodziski-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Grójecki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://grojec.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kozienicki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://kozienicepowiat.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Legionowski',
            'woj': 'mazowieckie',
            'wfs_url': 'http://powiat-legionowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lipski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiatlipsko.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Łosicki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://losice.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Makowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://makow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Miński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/minsk?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Mławski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiatmlawski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nowodworski',
            'woj': 'mazowieckie',
            'wfs_url': 'http://nowodworski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostrołęcki',
            'woj': 'mazowieckie',
            'wfs_url': 'http://powiatostrolecki.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostrowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://ostrowmaz.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Otwocki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiat-otwocki.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Piaseczyński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/piaseczno?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Płocki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiat-plock.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Płoński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://plonski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Pruszkowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/pruszkow?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Przasnyski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://przasnysz.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Przysuski',
            'woj': 'mazowieckie',
            'wfs_url': 'http://przysucha.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Pułtuski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiatpultuski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Radomski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://radom.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Siedlecki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiatsiedlecki.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Sierpecki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://sierpc.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Sochaczewski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://sochaczew.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Sokołowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://powiat-sokolowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Szydłowiecki',
            'woj': 'mazowieckie',
            'wfs_url': 'https://szydlowiecpowiat.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Warszawski Zachodni',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.pwz.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Węgrowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/wegrow?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Wołomiński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/wolomin?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Wyszkowski',
            'woj': 'mazowieckie',
            'wfs_url': 'http://powiat-wyszkowski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Zwoleński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://zwolenpowiat.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Żuromiński',
            'woj': 'mazowieckie',
            'wfs_url': 'https://zuromin-powiat.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Żyrardowski',
            'woj': 'mazowieckie',
            'wfs_url': 'https://ikerg.powiat-zyrardowski.pl/zyrardow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
        /////////malopolskie //////////////
              {
            'powiat': 'Bocheński',
            'woj': 'malopolskie',
            'wfs_url': 'https://bochenski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Brzeski',
            'woj': 'malopolskie',
            'wfs_url': 'https://brzesko.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Chrzanowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://chrzanowski.webewid.pl:22443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Dąbrowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://dabrowski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Gorlicki',
            'woj': 'malopolskie',
            'wfs_url': 'https://gorlicki.webewid.pl:4443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Krakowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://wms.powiat.krakow.pl:1518/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Limanowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://limanowski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Miechowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://miechow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Myślenicki',
            'woj': 'malopolskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/1209?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Nowosądecki',
            'woj': 'malopolskie',
            'wfs_url': 'https://wms.nowosadecki.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Nowotarski',
            'woj': 'malopolskie',
            'wfs_url': 'https://nowotarski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Olkuski',
            'woj': 'malopolskie',
            'wfs_url': 'https://olkuski.webewid.pl:4434/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Oświęcimski',
            'woj': 'malopolskie',
            'wfs_url': 'https://oswiecimski.webewid.pl:4422/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Proszowicki',
            'woj': 'malopolskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/1214?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Suski',
            'woj': 'malopolskie',
            'wfs_url': 'https://powiatsuski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Tarnowski',
            'woj': 'malopolskie',
            'wfs_url': 'https://webewid.powiat.tarnow.pl:20443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Tatrzański',
            'woj': 'malopolskie',
            'wfs_url': 'https://tatrzanski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Wadowicki',
            'woj': 'malopolskie',
            'wfs_url': 'https://wadowicki.webewid.pl:20443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Wielicki',
            'woj': 'malopolskie',
            'wfs_url': 'https://wielicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Kraków',
            'woj': 'malopolskie',
            'wfs_url': 'https://geodezja.eco.um.krakow.pl/krakow-egib?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nowy Sącz',
            'woj': 'malopolskie',
            'wfs_url': 'https://wms.nowosadecki.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Tarnów',
            'woj': 'malopolskie',
            'wfs_url': 'https://wms.umt.tarnow.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            ///////////lodzkie ////////
            {
            'powiat': 'Bełchatowski',
            'woj': 'lodzkie',
            'wfs_url': 'http://belchatow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Kutnowski',
            'woj': 'lodzkie',
            'wfs_url': 'https://powiatkutno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Łaski',
            'woj': 'lodzkie',
            'wfs_url': 'https://lask.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Łęczycki',
            'woj': 'lodzkie',
            'wfs_url': 'https://leczycki.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Łowicki',
            'woj': 'lodzkie',
            'wfs_url': 'http://lowicz.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Łódzki Wschodni',
            'woj': 'lodzkie',
            'wfs_url': 'https://lodzkiwschodni.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Opoczyński',
            'woj': 'lodzkie',
            'wfs_url': 'https://opoczno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Pabianicki',
            'woj': 'lodzkie',
            'wfs_url': 'https://pabianice.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Pajęczański',
            'woj': 'lodzkie',
            'wfs_url': 'https://pajeczno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Piotrkowski',
            'woj': 'lodzkie',
            'wfs_url': 'https://piotrkow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Poddębicki',
            'woj': 'lodzkie',
            'wfs_url': 'http://poddebice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Radomszczański',
            'woj': 'lodzkie',
            'wfs_url': 'https://radomszczanski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Rawski',
            'woj': 'lodzkie',
            'wfs_url': 'https://wms.powiatrawski.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Sieradzki',
            'woj': 'lodzkie',
            'wfs_url': 'https://sieradz.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Skierniewicki',
            'woj': 'lodzkie',
            'wfs_url': 'https://powiat-skierniewice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Tomaszowski',
            'woj': 'lodzkie',
            'wfs_url': 'https://powiat-tomaszowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Wieluński',
            'woj': 'lodzkie',
            'wfs_url': 'https://wielun.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Wieruszowski',
            'woj': 'lodzkie',
            'wfs_url': 'https://wieruszow.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Zduńskowolski',
            'woj': 'lodzkie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/1019?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Zgierski',
            'woj': 'lodzkie',
            'wfs_url': 'https://zgierski-wms.webewid.pl:743/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Brzeziński',
            'woj': 'lodzkie',
            'wfs_url': 'http://brzeziny.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Łódź',
            'woj': 'lodzkie',
            'wfs_url': 'https://mapa.lodz.pl/OGC/EGiB/?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Piotrków Trybunalski',
            'woj': 'lodzkie',
            'wfs_url': 'https://ikerg.piotrkow.pl/piotrkow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Skierniewice',
            'woj': 'lodzkie',
            'wfs_url': 'https://skierniewice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
      ///////////Lubuskie ///////////
             {
            'powiat': 'Gorzowski',
            'woj': 'lubuskie',
            'wfs_url': 'https://powiatgorzowski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Krośnieński',
            'woj': 'lubuskie',
            'wfs_url': 'https://wms.powiatkrosnienski.pl/krosno-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Międzyrzecki',
            'woj': 'lubuskie',
            'wfs_url': 'https://powiat-miedzyrzecki.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nowosolski',
            'woj': 'lubuskie',
            'wfs_url': 'https://wms.powiat-nowosolski.pl/nowasol-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Słubicki',
            'woj': 'lubuskie',
            'wfs_url': 'https://slubice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Strzelecko‑Drezdenecki',
            'woj': 'lubuskie',
            'wfs_url': 'https://fsd.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sulęciński',
            'woj': 'lubuskie',
            'wfs_url': 'https://sulecin.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Świebodziński',
            'woj': 'lubuskie',
            'wfs_url': 'https://giportal2.powiat.swiebodzin.pl/swiebodzin-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Zielonogórski',
            'woj': 'lubuskie',
            'wfs_url': 'https://giportal.powiat-zielonogorski.pl/zielonagora-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Żagański',
            'woj': 'lubuskie',
            'wfs_url': 'https://zaganski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Żarski',
            'woj': 'lubuskie',
            'wfs_url': 'https://zary.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Wschowski',
            'woj': 'lubuskie',
            'wfs_url': 'http://wschowa.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Gorzów Wielkopolski',
            'woj': 'lubuskie',
            'wfs_url': 'https://geoportal.wms.um.gorzow.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Zielona Góra',
            'woj': 'lubuskie',
            'wfs_url': 'https://gis.um.zielona-gora.pl/arcgis/services/zielona_gora_egib/serwer?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
          //////////Lubelskie ///////////
          {
            'powiat': 'Bialski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatbialski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Biłgorajski',
            'woj': 'lubelskie',
            'wfs_url': 'https://bilgorajski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Chełmski',
            'woj': 'lubelskie',
            'wfs_url': 'https://chelmski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Hrubieszowski',
            'woj': 'lubelskie',
            'wfs_url': 'https://hrubieszow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Janowski',
            'woj': 'lubelskie',
            'wfs_url': 'https://janow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Krasnostawski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatkrasnostawski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kraśnicki',
            'woj': 'lubelskie',
            'wfs_url': 'https://krasnicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lubartowski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatlubartowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lubelski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatlubelski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Łęczyński',
            'woj': 'lubelskie',
            'wfs_url': 'https://leczna.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Łukowski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatlukowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Opolski',
            'woj': 'lubelskie',
            'wfs_url': 'https://opolelubelskie.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Parczewski',
            'woj': 'lubelskie',
            'wfs_url': 'http://parczew.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Puławski',
            'woj': 'lubelskie',
            'wfs_url': 'https://pulawy.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Radzyński',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatradzynski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Rycki',
            'woj': 'lubelskie',
            'wfs_url': 'https://ryki.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Świdnicki',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatswidnik.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Tomaszowski',
            'woj': 'lubelskie',
            'wfs_url': 'https://tomaszowlubelski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Włodawski',
            'woj': 'lubelskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/wlodawa?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Zamojski',
            'woj': 'lubelskie',
            'wfs_url': 'https://powiatzamojski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Lublin',
            'woj': 'lubelskie',
            'wfs_url': 'https://gis.lublin.eu/opendata/wfs?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Chełm',
            'woj': 'lubelskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/mchelm?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Zamość',
            'woj': 'lubelskie',
            'wfs_url': 'https://zamosc.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
              {
            'powiat': 'Biała Podlaska',
            'woj': 'lubelskie',
            'wfs_url': 'http://bialapodlaska.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
          ///////////kujawsko_pomorskie //////////////
            {
            'powiat': 'Aleksandrowski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://mapa.aleksandrow.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Brodnicki',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://mapa.brodnica.com.pl/map/geoportal/wfs.php?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Bydgoski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/0403?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Chełmiński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://chelminski.webewid.pl:44316/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Golubsko-Dobrzyński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://golubsko-dobrzynski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Grudziądzki',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://wms.powiatgrudziadzki.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Inowrocławski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://inowroclawski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lipnowski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://lipno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Mogileński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://mogilenski.webewid.pl:4444/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nakielski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://nakielski.webewid.pl:62627/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Radziejowski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://radziejow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Rypiński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'http://rypin.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sępoleński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://sepolenski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Świecki',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://wms.csw.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Toruński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://torunski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Tucholski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://tucholski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Wąbrzeski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://wabrzezno.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Włocławski',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://wloclawek.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Żniński',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://zninski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Bydgoszcz',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://e-uslugi.mpg.bydgoszcz.pl/ggp?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Grudziądz',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://geoportal.grudziadz.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '2.0.0'
            },
             {
            'powiat': 'Toruń',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://mtorun-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Włocławek',
            'woj': 'kujawsko_pomorskie',
            'wfs_url': 'https://geoportal.wloclawek.eu/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
           ///////////Opolskie ///////////
              {
            'powiat': 'Brzeski',
            'woj': 'opolskie',
            'wfs_url': 'https://imapa.brzeg-powiat.pl/brzeg-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Głubczycki',
            'woj': 'opolskie',
            'wfs_url': 'https://ikerg.powiatglubczycki.pl/cgi-bin/glubczyce-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Kędzierzyńsko‑kozielski',
            'woj': 'opolskie',
            'wfs_url': 'https://ikerg.geo.powiat.kedzierzyn-kozle.pl/kedzierzynkozle-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Kluczborski',
            'woj': 'opolskie',
            'wfs_url': 'https://ikerg.powiatkluczborski.eu/kluczbork-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Krapkowicki',
            'woj': 'opolskie',
            'wfs_url': 'https://ikerg.powiatkrapkowicki.pl/krapkowice-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Namysłowski',
            'woj': 'opolskie',
            'wfs_url': 'https://iegib.namyslow.pl/cgi-bin/namyslow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Nyski',
            'woj': 'opolskie',
            'wfs_url': 'https://wms-egib.powiat.nysa.pl/nysa-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Oleski',
            'woj': 'opolskie',
            'wfs_url': 'https://giportal.powiatoleski.pl/olesno-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Opolski',
            'woj': 'opolskie',
            'wfs_url': 'https://geodezja.powiatopolski.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Prudnicki',
            'woj': 'opolskie',
            'wfs_url': 'https://ikerg2.powiatprudnicki.pl/prudnik-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Strzelecki',
            'woj': 'opolskie',
            'wfs_url': 'https://mapy.powiatstrzelecki.pl/ggp?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Opole',
            'woj': 'opolskie',
            'wfs_url': 'https://wms.um.opole.pl/opole-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'application/gml+xml; version=3.2',
            'version': '2.0.0'
            },

           ///////////Podkarpackie ///////////
            {
            'powiat': 'Bieszczadzki',
            'woj': 'podkarpackie',
            'wfs_url': 'https://bieszczadzki-wms.webewid.pl:4434/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Brzozowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://brzozowski.webewid.pl:4443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Dębicki',
            'woj': 'podkarpackie',
            'wfs_url': 'https://debica.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Jarosławski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://jaroslawski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Jasielski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://jasielski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Kolbuszowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://kolbuszowa.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Krośnieński',
            'woj': 'podkarpackie',
            'wfs_url': 'https://krosnienski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Leżajski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://lezajsk.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lubaczowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://lubaczow.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Łańcucki',
            'woj': 'podkarpackie',
            'wfs_url': 'https://lancut.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Mielecki',
            'woj': 'podkarpackie',
            'wfs_url': 'https://mielec.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Niżański',
            'woj': 'podkarpackie',
            'wfs_url': 'https://powiat-nisko.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Przemyski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://powiat-przemysl.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Przeworski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://sip.powiatprzeworsk.pl:4443/iip/ows?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ropczycko‑Sędziszowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://spropczyce.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Rzeszowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://powiatrzeszowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sanocki',
            'woj': 'podkarpackie',
            'wfs_url': 'https://sanocki.webewid.pl:8443/iip/ows?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Stalowowolski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://stalowawola.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Strzyżowski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://strzyzowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Tarnobrzeski',
            'woj': 'podkarpackie',
            'wfs_url': 'https://tarnobrzeski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Lesko',
            'woj': 'podkarpackie',
            'wfs_url': 'https://lesko.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Rzeszów',
            'woj': 'podkarpackie',
            'wfs_url': 'https://osrodek.erzeszow.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Przemyśl',
            'woj': 'podkarpackie',
            'wfs_url': 'https://przemysl.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Tarnobrzeg',
            'woj': 'podkarpackie',
            'wfs_url': 'https://tarnobrzeg.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Krosno',
            'woj': 'podkarpackie',
            'wfs_url': 'https://krosno-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             /////////////Podlaskie ///////////
            {
            'powiat': 'Augustowski',
            'woj': 'podlaskie',
            'wfs_url': 'https://augustowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Białostocki',
            'woj': 'podlaskie',
            'wfs_url': 'https://bialystok.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Bielski',
            'woj': 'podlaskie',
            'wfs_url': 'http://powiatbielski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Grajewski',
            'woj': 'podlaskie',
            'wfs_url': 'http://starostwograjewo.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Hajnowski',
            'woj': 'podlaskie',
            'wfs_url': 'http://hajnowka.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kolneński',
            'woj': 'podlaskie',
            'wfs_url': 'https://kolnenski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Łomżyński',
            'woj': 'podlaskie',
            'wfs_url': 'https://lomzynski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Moniecki',
            'woj': 'podlaskie',
            'wfs_url': 'https://monki.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sejneński',
            'woj': 'podlaskie',
            'wfs_url': 'https://sejny.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Siemiatycki',
            'woj': 'podlaskie',
            'wfs_url': 'https://geoportal.siemiatycze.pl/siemiatycze-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sokólski',
            'woj': 'podlaskie',
            'wfs_url': 'https://powiatsokolski.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Suwalski',
            'woj': 'podlaskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/2012?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Wysokomazowiecki',
            'woj': 'podlaskie',
            'wfs_url': 'http://wysokomazowiecki.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Zambrowski',
            'woj': 'podlaskie',
            'wfs_url': 'https://powiatzambrowski.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Białystok',
            'woj': 'podlaskie',
            'wfs_url': 'https://webewid-wms.um.bialystok.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Łomża',
            'woj': 'podlaskie',
            'wfs_url': 'https://lomzynski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Suwałki',
            'woj': 'podlaskie',
            'wfs_url': 'https://geoportal.um.suwalki.pl/ggp?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            /////////////Pomorskie /////////
            {
            'powiat': 'Bytowski',
            'woj': 'pomorskie',
            'wfs_url': 'https://bytowski.webewid.pl:4433/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Chojnicki',
            'woj': 'pomorskie',
            'wfs_url': 'https://chojnicki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Człuchowski',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.czluchow.org.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Gdański',
            'woj': 'pomorskie',
            'wfs_url': 'https://gdanski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Kartuski',
            'woj': 'pomorskie',
            'wfs_url': 'https://kartuski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Kościerski',
            'woj': 'pomorskie',
            'wfs_url': 'https://koscierski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Kwidzyński',
            'woj': 'pomorskie',
            'wfs_url': 'https://kwidzynski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Lęborski',
            'woj': 'pomorskie',
            'wfs_url': 'https://leborski.webewid.pl:44443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Malborski',
            'woj': 'pomorskie',
            'wfs_url': 'https://malborski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Nowodworski',
            'woj': 'pomorskie',
            'wfs_url': 'https://nowodworski.webewid.pl:4444/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Pucki',
            'woj': 'pomorskie',
            'wfs_url': 'https://pdp.puck.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Słupski',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.powiat.slupsk.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Starogardzki',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.powiatstarogard.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Tczewski',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.powiat.tczew.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Wejherowski',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/wejherowo?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Sztumski',
            'woj': 'pomorskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/2216?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Gdańsk',
            'woj': 'pomorskie',
            'wfs_url': 'https://ewid-wms.gdansk.gda.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
              {
            'powiat': 'Gdynia',
            'woj': 'pomorskie',
            'wfs_url': 'https://pc73.miasto.gdynia.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Słupsk',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.slupsk.eu/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Sopot',
            'woj': 'pomorskie',
            'wfs_url': 'https://wms.um.sopot.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            ///////////Śląskie /////////////
            {
            'powiat': 'Będziński',
            'woj': 'slaskie',
            'wfs_url': 'https://ikerg.powiat.bedzin.pl/bedzin-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Bielski',
            'woj': 'slaskie',
            'wfs_url': 'https://bielski-ows.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Cieszyński',
            'woj': 'slaskie',
            'wfs_url': 'https://cieszyn.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Częstochowski',
            'woj': 'slaskie',
            'wfs_url': 'https://czestochowa.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Gliwicki',
            'woj': 'slaskie',
            'wfs_url': 'https://gliwicki.webewid.pl:4443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Kłobucki',
            'woj': 'slaskie',
            'wfs_url': 'https://powiatklobucki.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Lubliniecki',
            'woj': 'slaskie',
            'wfs_url': 'http://wms.lubliniec.starostwo.gov.pl/lubliniec-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Mikołowski',
            'woj': 'slaskie',
            'wfs_url': 'https://mapa.mikolowski.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Myszkowski',
            'woj': 'slaskie',
            'wfs_url': 'https://imapa.powiatmyszkowski.pl/myszkow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Pszczyński',
            'woj': 'slaskie',
            'wfs_url': 'https://pszczynski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Raciborski',
            'woj': 'slaskie',
            'wfs_url': 'https://raciborz.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Rybnicki',
            'woj': 'slaskie',
            'wfs_url': 'https://rybnik.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Tarnogórski',
            'woj': 'slaskie',
            'wfs_url': 'https://geodane.tarnogorski.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Bieruńsko‑lędziński',
            'woj': 'slaskie',
            'wfs_url': 'https://sbl.webewid.pl:8443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Wodzisławski',
            'woj': 'slaskie',
            'wfs_url': 'https://imapa.powiatwodzislawski.pl/wodzislaw-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Zawierciański',
            'woj': 'slaskie',
            'wfs_url': 'https://ikerg.zawiercie.powiat.pl/powiatzawiercianski-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Żywiecki',
            'woj': 'slaskie',
            'wfs_url': 'https://zywiecki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Bielsko‑Biała',
            'woj': 'slaskie',
            'wfs_url': 'https://ikerg.bielsko-biala.pl/bielsko-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Bytom',
            'woj': 'slaskie',
            'wfs_url': 'https://iwms.um.bytom.pl/bytom-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Chorzów',
            'woj': 'slaskie',
            'wfs_url': 'https://e-odgik.chorzow.eu/arcgis/services/wfs/chorzow_egib_publ/MapServer/WFSServer?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Częstochowa',
            'woj': 'slaskie',
            'wfs_url': 'https://geoportal.czestochowa.pl/wfs2464_egib/Service.svc/get?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Dąbrowa Górnicza',
            'woj': 'slaskie',
            'wfs_url': 'https://geoportal-wms.dg.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Gliwice',
            'woj': 'slaskie',
            'wfs_url': 'https://wmswfs-geodezja.gliwice.eu/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Jastrzębie‑Zdrój',
            'woj': 'slaskie',
            'wfs_url': 'https://jastrzebie.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Jaworzno',
            'woj': 'slaskie',
            'wfs_url': 'https://jaworzno-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Katowice',
            'woj': 'slaskie',
            'wfs_url': 'https://emapa.katowice.eu/arcgis/services/wms_egib_gugik/MapServer/WFSServer?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Mysłowice',
            'woj': 'slaskie',
            'wfs_url': 'https://wms.myslowice.pl/myslowice-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Piekary Śląskie',
            'woj': 'slaskie',
            'wfs_url': 'https://wms.sip.piekary.pl/piekary-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Ruda Śląska',
            'woj': 'slaskie',
            'wfs_url': 'https://rudaslaska.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Rybnik',
            'woj': 'slaskie',
            'wfs_url': 'https://geodeta.gpue.rybnik.eu/rybnik-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Siemianowice Śląskie',
            'woj': 'slaskie',
            'wfs_url': 'https://siemianowice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Sosnowiec',
            'woj': 'slaskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/2475?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Świętochłowice',
            'woj': 'slaskie',
            'wfs_url': 'https://swietochlowice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Tychy',
            'woj': 'slaskie',
            'wfs_url': 'https://geowms.umtychy.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Zabrze',
            'woj': 'slaskie',
            'wfs_url': 'https://wms.miastozabrze.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Żory',
            'woj': 'slaskie',
            'wfs_url': 'https://siemianowice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            //////////Świętokrzyskie /////////
             {
            'powiat': 'Buski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://geodezja.powiat.busko.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Jędrzejowski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://jedrzejow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kazimierski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://kazimierzaw.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Kielecki',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://geoportal.powiat.kielce.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Koński',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://konskie.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Opatowski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'http://opatow.geoportal2.pl/map/geoportal/wfse.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostrowiecki',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://ostrowiec.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Pińczowski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://pinczow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Sandomierski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://sandomierz.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Skarżyski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'http://skarzysko.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Starachowicki',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://starachowice.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
             {
            'powiat': 'Staszowski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://staszow.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Włoszczowski',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://wloszczowa.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kielce',
            'woj': 'swietokrzyskie',
            'wfs_url': 'https://wms.kielce.eu/kielce-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            //////////Wielkopolskie ////////////
            {
            'powiat': 'Gostyński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://imapa.powiat.gostyn.pl/gostyn-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Grodziski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.pgw.pl/grodziskwlkp-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Jarociński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiat-jarocinski.pl/jarocin-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kaliski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://kalisz.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kępiński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiatkepno.pl/kepno-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kolski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.starostwokolskie.pl/powiatkolski-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Koniński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://konin.geoportal2.pl/map/geoportal/wfs.php?',
            'layer_name': 'ewns:dzialki',
            'format': 'application/xml; subtype=gml/3.2',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kościański',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.powiatkoscian.pl/koscian-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Krotoszyński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/3012?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Leszczyński',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://leszczynski.webewid.pl:543/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Międzychodzki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.epodgik.pl/cgi-bin/miedzychod?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Nowotomyski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.powiatnowotomyski.pl/nowytomysl-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Obornicki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiatobornicki.pl/oborniki-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostrowski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiat-ostrowski.pl/ostrow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Ostrzeszowski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.spostrzeszow.pl/ostrzeszow-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Pilski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiat.pila.pl/pila-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Pleszewski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.geo.net.pl/pleszew-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Poznański',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.podgik.poznan.pl/wms-poznanski?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Rawicki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiatrawicki.pl/rawicz-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Słupecki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.powiat-slupca.pl/slupca-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Szamotulski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.szamotuly.com.pl/szamotuly-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Śremski',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.powiat-srem.pl/srem-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Średzki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://wms.powiatsredzki.pl/srodawlkp-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Turecki',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://iegib.powiat.turek.pl/cgi-bin/turek_egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Poznań',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://portal.geopoz.poznan.pl/wmsegib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Kalisz',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.um.kalisz.pl/kalisz-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Konin',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://ikerg.kosit.konin.eu/konin-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            {
            'powiat': 'Leszno',
            'woj': 'wielkopolskie',
            'wfs_url': 'https://imapa.leszno.pl/mleszno-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.2.1',
            'version': '2.0.0'
            },
            //////////zachodniopomorskie /////////////
            {
            'powiat': 'Białogardzki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://bialogardzki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Choszczeński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://ikerg.geopowiatchoszczno.pl/choszczno-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Drawski',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://drawski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Goleniowski',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://goleniowski.webewid.pl:6443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Gryficki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://ikerg.podgikgryfice.pl/gryfice-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Gryfiński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://gryfinski.webewid.pl:4439/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Kamieński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://ikerg.powiatkamienski.pl/kamien?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Kołobrzeski',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://kolobrzeski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Koszaliński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://koszalinski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Łobeski',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://wms.powiatlobeski.pl/lobez-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Myśliborski',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://wms.powiatmysliborski.com.pl/mysliborz-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Policki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://wgkik.policki.pl/police-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Pyrzycki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://ikerg.pyrzyce.pl/pyrzyce-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Sławieński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://slawienski.webewid.pl:4443/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Stargardzki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://ikerg2.powiatstargardzki.eu/stargard-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Szczecinecki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://szczecinecki-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Świdwiński',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://swidwinski-wms.webewid.pl/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Wałecki',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://walecki.webewid.pl:4434/iip/ows?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Koszalin',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://mapy.geoportal.gov.pl/wss/ext/PowiatoweBazyEwidencjiGruntow/3261?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
             {
            'powiat': 'Szczecin',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://wms.e-osrodek.szczecin.pl/szczecin-egib?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            {
            'powiat': 'Świnoujście',
            'woj': 'zachodniopomorskie',
            'wfs_url': 'https://geo-wms.um.swinoujscie.pl/swinoujscie?',
            'layer_name': 'ms:dzialki',
            'format': 'text/xml; subtype=gml/3.1.1',
            'version': '1.1.0'
            },
            ]
