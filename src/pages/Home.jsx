import { sampleCard1Data1 } from "../constants";
import Card1 from "../components/HomeCard";
import ProductCard from "../components/ProductCard";
// import "./Home.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Carousel from "../Carousal";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Home", "Theme : ", theme);

  return (
    <div className="flex flex-col">
      <div>
        <Carousel />
      </div>
      <div
        className="home-container flex-1 flex flex-col relative mt-[-350px]"
        onClick={() => setTheme("dark")}
      >
        <div className="home gap-4 p-4 w-full max-w-[1500px] m-auto flex flex-col">
          <div className="w-full flex flex-wrap justify-between gap-4 mx-auto">
            {sampleCard1Data1.map((card) => (
              <Card1 key={card.id} data={card} name={1} />
            ))}
          </div>
          <div className="products w-full flex flex-wrap justify-between gap-4 mx-auto mt-6">
            {data.slice(0, 15).map((product) => (
              <ProductCard key={product.product_id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


//


const data = [
  {
    product_id: "B01J8S6X2I",
    product_name:
      "AmazonBasics 6 Feet DisplayPort to DisplayPort Cable - (Not HDMI Cable) (Gold)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|DVICables",
    discounted_price: "₹499",
    actual_price: "₹1,100",
    discount_percentage: "55%",
    rating: 4.4,
    rating_count: "25,177",
    about_product:
      "DisplayPort to DisplayPort cable transmits HD audio and video from computer to display (This is not an HDMI cable)|Please check resolution before connection for proper output.|Gold-plated connectors, bare copper conductors, and foil-and-braid shielding for reliable connectivity|Compliant to version 1.2 specs|works with DP, DP++, and DisplayPort++|supports video resolutions up to 4Kx2K|VESA certified",
    user_id:
      "AHHEVDG5NWTNJRAW4M5FIRKMFEEA,AFLX5QGGOSHYDJV3E42JXTXCRXPQ,AEX4G7GNLVALDJDAZY33RNZ6KIVQ,AFGMGHDUS2Z6ME6PD3XFJM2VKOEQ,AFBJDIUA2EUBVIRXAXLNC7ENHAIQ,AGMYS67M6E6V2W3UP2EVWZBP4WHQ,AFPLFU6EUEEXHU4SCPG6UUBS4HAA,AFAJRPO7FNQVWYXLU5RMHFVJDARQ",
    user_name:
      "sanjay,Hari R.,rohit,Samrat Mandal,Abhishek K.,Awesomecritic,Ankur singh,Jayesh chavan",
    review_id:
      "R8KWWR9D7Z8ZP,R1K9VOKVDAH1FT,R3VA611ERW9TJ2,RURQQWP8I8XS4,R19O55T880XD8U,R3CHHGYZD5QMGM,RHKJASTLGEF14,R1CD68IZMR4O62",
    review_title:
      "Awsome quality,Nice item,Better Display Port Cable,Works! GTX1650 Super, DELL 2520D (MST),Value for money,Not Vesa certified cable.,YOU CAN BUY IT UNDOUBTEDLY.,Check Display settings as soon as you install this cable.",
    review_content:
      "Amazon should provide 2 mtr cable length, very good quality,Nice item, received in good packaging.,The cables is perfectly working and there is no color difference with it.,It works perfectly with GTX 1650 Super (Asus TUF) and DELL 2520D with single desktop across dual monitor setup (multi-stream). The trick to figuring out is how the cable fits your DP port, both sides. This fit in snugly with GTX and I knew this is gonna work. No need to do any voodoo with pulling cables, powering off this and that, to make DP cable work, just works straight out of the box.Strangely, this cable didn't support my Logitech G603 (wireless gaming mouse) Lightspeed connection. The dongle is attached to the 1st of the two DELL 2520D Monitors. Mouse works when I am viewing over Type-C PD Display with my Laptops. Otherwise Audio, Video, resolution , refresh rates didn't bother.Durability could be a question, let's wait and observe over the days. A lot have commented that this cable didn't last long.,Best in the budget.,This is not Vesa certified cable. sometimes the monitor  goes black for 3 to 4 second.,,The product is good, Its been almost a week I am using this cable. I am using a LG 24GM77 Monitor (1080p 144Hz) As soon as I installed this cable the display went on default refresh rate (60 Hz). Then I went into windows display settings (as Nvidia settings didn't have refresh rate more than 60 Hz) to change the refresh rate to 144 Hz and it switched without any issues. Avoid jerks to the monitor as I figured the display goes off for a brief 1 or 2 secs post jerking. Rest the cable quality is good, However locks to the display ports could be appreciated. Rest all is fine. I hope this review might be helpful. Thank you.",
    img_link:
      "https://m.media-amazon.com/images/I/41AcG6PavXL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/AmazonBasics-Feet-DisplayPort-Cable/dp/B01J8S6X2I/ref=sr_1_252?qid=1672909136&s=electronics&sr=1-252",
  },
  {
    product_id: "B0789LZTCJ",
    product_name:
      "boAt Rugged v3 Extra Tough Unbreakable Braided Micro USB Cable 1.5 Meter (Black)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹299",
    actual_price: "₹799",
    discount_percentage: "63%",
    rating: 4.2,
    rating_count: "94,363",
    about_product:
      "The boAt rugged cable features our special toughest polyethylene braided jacket and this unique jacket provides greater protection than anything else you have seen in its class. Round Cable|Extra tough polyethylene terephthalate cable skin ensures 10000 plus bend lifespan, stress and stretch resistance|The boAt rugged Micro USB cable is compatible with most android smartphones, windows phone, tablets, PC peripherals and other micro USB compatible devices|2.4A rapid charge, fast data transmission and rapid speed to sync your device at the speed up to 480mbps|boAt rugged micro USB cable offers a perfect 1.5 meters in length, optimized for an easy use for your comfort at home or office|2 years warranty from the date of purchase",
    user_id:
      "AEWAZDZZJLQUYVOVGBEUKSLXHQ5A,AG5HTSFRRE6NL3M5SGCUQBP7YSCA,AH725ST5NW2Y4JZPKUNTIJCUK2BA,AHV3TXIFCJPMS4D5JATCEUR266MQ,AGWIGDEMFIIUAOXYY2QATNBSUGHA,AFSTSLQUV4EVEXWKBOLEFHL2H5YQ,AGAKDNBHY2FKX7I4ACRGILU7QL7A,AFNWJUWJRHCC6HN52KMG5AKZY37Q",
    user_name:
      "Omkar dhale,JD,HEMALATHA,Ajwadh a.,amar singh chouhan,Ravi Siddan,Himanshu Goel,Udaykumar",
    review_id:
      "R3EEUZKKK9J36I,R3HJVYCLYOY554,REDECAZ7AMPQC,R1CLH2ULIVG5U3,R2DMKIBGFKBD6R,RC89B5IAJUTR5,R3B3DDON5FH8DS,R13WAEJDI5RS36",
    review_title:
      "Good product,Good one,Nice,Really nice product,Very first time change,Good,Fine product but could be better,Very nice it's charging like jet",
    review_content:
      "Good product,long wire,Charges good,Nice,I bought this cable for Rs.339 worthy product for this price, i tested it in various charger adapters 33w and 18w it supports fast charging as well.,Good,Ok,I had got this at good price on sale on Amazon and product is useful with warranty but for warranty you need to go very far not practical for such a cost and mine micro to type c connector stopped working after few days only.,I like this product",
    img_link:
      "https://m.media-amazon.com/images/I/41SDfuK7L2L._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Rugged-Extra-Tough-Unbreakable-Braided/dp/B0789LZTCJ/ref=sr_1_13?qid=1672909124&s=electronics&sr=1-13",
  },
  {
    product_id: "B07JW9H4J1",
    product_name:
      "Wayona Nylon Braided USB to Lightning Fast Charging and Data Sync Cable Compatible for iPhone 13, 12,11, X, 8, 7, 6, 5, iPad Air, Pro, Mini (3 FT Pack of 1, Grey)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹399",
    actual_price: "₹1,099",
    discount_percentage: "64%",
    rating: 4.2,
    rating_count: "24,269",
    about_product:
      "High Compatibility : Compatible With iPhone 12, 11, X/XsMax/Xr ,iPhone 8/8 Plus,iPhone 7/7 Plus,iPhone 6s/6s Plus,iPhone 6/6 Plus,iPhone 5/5s/5c/se,iPad Pro,iPad Air 1/2,iPad mini 1/2/3,iPod nano7,iPod touch and more apple devices.|Fast Charge&Data Sync : It can charge and sync simultaneously at a rapid speed, Compatible with any charging adaptor, multi-port charging station or power bank.|Durability : Durable nylon braided design with premium aluminum housing and toughened nylon fiber wound tightly around the cord lending it superior durability and adding a bit to its flexibility.|High Security Level : It is designed to fully protect your device from damaging excessive current.Copper core thick+Multilayer shielding, Anti-interference, Protective circuit equipment.|WARRANTY: 12 months warranty and friendly customer services, ensures the long-time enjoyment of your purchase. If you meet any question or problem, please don't hesitate to contact us.",
    user_id:
      "AG3D6O4STAQKAY2UVGEUV46KN35Q,AHMY5CWJMMK5BJRBBSNLYT3ONILA,AHCTC6ULH4XB6YHDY6PCH2R772LQ,AGYHHIERNXKA6P5T7CZLXKVPT7IQ,AG4OGOFWXJZTQ2HKYIOCOY3KXF2Q,AENGU523SXMOS7JPDTW52PNNVWGQ,AEQJHCVTNINBS4FKTBGQRQTGTE5Q,AFC3FFC5PKFF5PMA52S3VCHOZ5FQ",
    user_name:
      "Manav,Adarsh gupta,Sundeep,S.Sayeed Ahmed,jaspreet singh,Khaja moin,Anand,S.ARUMUGAM",
    review_id:
      "R3HXWT0LRP0NMF,R2AJM3LFTLZHFO,R6AQJGUP6P86,R1KD19VHEDV0OR,R3C02RMYQMK6FC,R39GQRVBUZBWGY,R2K9EDOE15QIRJ,R3OI7YT648TL8I",
    review_title:
      "Satisfied,Charging is really fast,Value for money,Product review,Good quality,Good product,Good Product,As of now seems good",
    review_content:
      "Looks durable Charging is fine tooNo complains,Charging is really fast, good product.,Till now satisfied with the quality.,This is a good product . The charging speed is slower than the original iPhone cable,Good quality, would recommend,https://m.media-amazon.com/images/I/81---F1ZgHL._SY88.jpg,Product had worked well till date and was having no issue.Cable is also sturdy enough...Have asked for replacement and company is doing the same...,Value for money",
    img_link:
      "https://m.media-amazon.com/images/I/51UsScvHQNL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Wayona-Braided-WN3LG1-Syncing-Charging/dp/B07JW9H4J1/ref=sr_1_33?qid=1672902996&s=computers&sr=1-33",
  },
  {
    product_id: "B0B6F7LX4C",
    product_name:
      "MI 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)",
    category: "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions",
    discounted_price: "₹13,999",
    actual_price: "₹24,999",
    discount_percentage: "44%",
    rating: 4.2,
    rating_count: "32,840",
    about_product:
      "Note : The brands, Mi and Xiaomi, are part of the same multinational conglomerate|Resolution : HD Ready (1366 x 768) Resolution | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle|Connectivity: Dual Band Wi-Fi | 2 HDMI ports to connect latest gaming consoles, set top box, Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ALLM | ARC | Bluetooth 5.0 | Ethernet|Sound: 20 Watts Output | Dolby Audio, DTS Virtual: X, DTS-HD|Smart TV Features : Android TV 11 | PatchWall | IMDb Integration | Universal Search | 300+ Free Live Channels | Kids Mode with Parental lock | Smart Recommendations | Language Universe – 15+ Languages | User Centre | Okay Google | Chromecast suporting Apps : Netflix, Prime Video, Disney+ Hotstar | 5000+ apps from Play Store |Quad core Cortex A35 | Chromecast built-in | Ok Google | Auto Low Latency Mode | 1GB RAM + 8GB Storage|Display: HD Ready | Vivid Picture Engine|Warranty Information: 1 year comprehensive warranty on product and 1 year additional on Panel provided by the brand from the date of purchase",
    user_id:
      "AHEVOQADJSSRX7DS325HSFLMP7VQ,AG7XYZRCSKX6G2OLO7DVZWIZ3PUQ,AE2THTCCQLBIUSWPF4CPXC6GGP7Q,AHUJZOV34DFEN55QQ5XOYKVKHV6Q,AELX4DI77ZHURZTDLYFU7XMP7R6Q,AE2ODWBBOBD2SITDDIEJ644OSRFQ,AFLW4WXYQ3G6HU5LBQORDDZO3FOQ,AGGRC2P6M43GDEWCAHGYAILCSKTQ",
    user_name:
      "Manoj maddheshiya,Manoj Kumar Sahoo,Saumil s.,Jean-Louis M.,Mahesh,syed azhar abbas,prabakaran,Sidhu",
    review_id:
      "R13UTIA6KOF6QV,R2UGDZSGFF01K7,RHHIZ45VYU5X6,R14N9HBE5EIUY0,R2WMW096T9Y0OU,R1SHIIE6M72825,R22P6BE9DBME4F,R2TEINENXTIHT2",
    review_title:
      "It is the best tv if you are getting it in 10-12k,Good price but the OS lags,GARBAGE QUALITY,Good product.,Good quality,Great experience everything is fantastic 🤠,Super picture quality and sound quality,Awesome",
    review_content:
      "Pros- xiomi 5a is best in budget-Nice picture quality-Very nice audio output- Full of featureCONS- sometimes tv lags-Sometimes stucksIn this prize range all tv having cons like this.::Overall nice tv,The product in this price range is good but as it is running in Android 12 it lags. I hope after few updates the lags problem will be resolved,Useless product and useless quality. Display issues within 7 months and service center is not upto the mark. Go for better brands where quality is assured. I would wish if there was option of negative stars.,Uses as connectes TV the picture is very good. I was hopping a best level of song. Globaly it is a good product.,https://m.media-amazon.com/images/I/61spXDbojZL._SY88.jpg,Greater then ever,Good quality,Good 👍",
    img_link:
      "https://m.media-amazon.com/images/I/51fmHk3km+L._SX300_SY300_.jpg",
    product_link:
      "https://www.amazon.in/MI-inches-Ready-Android-L32M7-5AIN/dp/B0B6F7LX4C/ref=sr_1_18?qid=1672909124&s=electronics&sr=1-18",
  },
  {
    product_id: "B08CS3BT4L",
    product_name:
      "Kodak 80 cm (32 inches) HD Ready Certified Android LED TV 32HDX7XPRO (Black)",
    category: "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions",
    discounted_price: "₹9,999",
    actual_price: "₹12,999",
    discount_percentage: "23%",
    rating: 4.2,
    rating_count: "6,088",
    about_product:
      "Resolution: HD Ready (1366 x 768) | Refresh Rate: 60 hertz|Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices|Sound output: 24 Watts Output|Smart TV Features: Android TV | Voice Search | Google Play | Chromecast | Prime Video|Display : A+ Grade Panel | Superior Sleek | Slim and stylish design|Warranty Information: 1 year standard manufacturer warranty by Kodak from the date of Purchase|Easy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description provided|Country of Origin: India",
    user_id:
      "AHXA44TFJADWFEA3DHLJWVUKZVDQ,AFTNE6LMFIWK3AULQAUWK6LP2ZIQ,AE442FMTBZA5GS5MDBKIB76GQDXQ,AECJGIPE6J5ODC5P7L6WXI4XBNYQ,AHATM4XWKOTU6FWTFVAS5TP6X2VQ,AFTFEMRWKEHE2R2QRRVOQFTETUUQ,AHUAVHWF66PF66YDJXGRXJASHYUQ,AGL76XCJ2EWY36ABPD25DHZRMQMA",
    user_name:
      "Fateh,Fauzia kahkashan,Prakash hembram,Shivu,mahesh,Rajesh Jindal,Ramapati Mishra,Amazon Customer",
    review_id:
      "R51BP5RJHSCM8,R1FLMETFTLS1GQ,RMT5PSCPJISQD,R1NAS02DEDJ7WL,RH13U02O9OE8A,R1T820289T9SW4,R2QJOMXODW8ALB,RJE8U42OVIJFV",
    review_title:
      "An unbiased look at the Kodak TV,Sound good,It's really worthy and the most affordable,Not bad!!!,a value TV for the price,Good in all respect,Kodak tv,Smart tv",
    review_content:
      "I recently purchased the Kodak TV from Amazon and overall, my experience has been satisfactory. The picture quality is good and the streaming capabilities are convenient. The user interface is easy to navigate, although it did take me a little bit of time to get used to it.However, I do have a few issues with the TV. The sound quality is not the best and I have noticed some lag when switching between apps. These issues do not significantly impact my viewing experience, but they are worth mentioning.Despite these issues, I would still give the Kodak TV 3 stars out of 5. It is a decent TV for the price, but there are certainly better options out there. I was offered an additional 3 months of warranty if I wrote a review, but I am not particularly interested in extending the warranty at this time.It is not appropriate or ethical to write a false or misleading review in exchange for incentives, such as an extended warranty or other perks. Doing so goes against Amazon's guidelines and can lead to consequences for both the customer and the company.It is important to be honest and transparent in your reviews and to only write about your genuine experiences with a product. This helps other customers make informed decisions about their purchases and ensures that the review system remains fair and trustworthy.If you are not satisfied with the Kodak TV or do not feel comfortable giving it a high rating, it is perfectly okay to give it a lower rating or to not write a review at all. It is always better to be honest and genuine in your reviews, rather than attempting to manipulate the system for personal gain.,Issues with chrome casting,I did not believe such a good feature would be available at this price.  I liked the feature of supporting the Ethernet port and earphone jack.,Kodak tv,For the amount being charged, this is a acceptable TV.The Kodak 7XPRO  model is same as Thomson 9A series.Despite being 32\" big, this was lighter than my previous Bravia 18\" TV and easily mounted to the previous wall-mount. Note: The wall mount holes are plasticky and dont have any metal insert.The remote sensor is separate module projecting from the underside of the TV and does not look integrated  with the main body.The two USB ports are side by side which dont interfere with each other.The Audio out port is a good feature if one wants to watch TV without disturbing others.When i first connected the TV to my set-top box over HDMI, there was only picture and no sound.The person at the service center whose number is listed on the TV's warranty card said that they dont support this and i need to call the TV manufacturer. so much for printing a service center number on warranty card.This was fixed after changing the HDMI CEC settings in the set-top box (not TV's fault).There is no user-manual given with the TV. most people, based on their experience with phone should be able to ultimately figure out the connections. The only included leaflet-book (whose pages were all stuck together) talks about the Android menu, There is no info on the TV's input jacks (like what the HDMI ARC stands for).I got multiple calls after the purchase to enquire about delivery and if i needed installation.As i already had a previous wall mount on which this could get attached with no hassles, I opted out of installation service.,All is welllll,Good tv,Picture quality is very good",
    img_link:
      "https://m.media-amazon.com/images/I/41ZptRPWCPL._SY300_SX300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Kodak-Inches-Certified-Android-32HDX7XPRO/dp/B08CS3BT4L/ref=sr_1_163?qid=1672909131&s=electronics&sr=1-163",
  },
  {
    product_id: "B09JN37WBX",
    product_name:
      "Lint Remover Woolen Clothes Lint Extractor Battery Lint Removing Machine Bhur Remover",
    category:
      "Home&Kitchen|Kitchen&HomeAppliances|Vacuum,Cleaning&Ironing|Irons,Steamers&Accessories|LintShavers",
    discounted_price: "₹319",
    actual_price: "₹749",
    discount_percentage: "57%",
    rating: 4.6,
    rating_count: 124,
    about_product:
      "Smoothly takes off the lint from fabric suitable for sweaters, woollens, blanket, sports wear|Dual protection The adjustable height spacer protects your garments from being cut or snagged or caught. It also protects and reinforces your hands from accidentally touching the shaver foil.|Battery Powered AC-220V at 50 Hz and 2 W Power|Fibre And Lint Storeman,Hair Sucker Remover for Any Fabric Clothing|Rotatory Sharp Blades & Remove the Lint Quickly|Flatly Lay Down The Textures & Remove Lint & Fibre|Battery Operated Lint Works Properly and to the best of the Capacity of the Batteries whatever you add",
    user_id:
      "AF4OLYBDMHJV5DUGONVIH7GU2V7Q,AEZNF3N52DQTHYBJ6ZKUG7UWXDIA,AHJ57SAHKACWMDHRDRNH5UXKQXRA,AH4FR3DUUHVLCFVUWCBTGF7BXQKQ,AFDFQBUFDOO44TCLCYJUSZFXRGBA,AH2JJHAQBJCR3JS2MWWMMOJ4JNPQ,AGMA33G2B4VFZS7GEQGKDFA7YM7Q,AESE5F7Z2OTRLIJKOPESC73ZQ72Q",
    user_name:
      "Kewal k.,SANCHIT BHATIA,Akshit kumar,Hugu gupta,Amazon Customer,Ayush Kumar,Shubh kumar,Saundarya",
    review_id:
      "R1XULCDQK9G8I7,RHPQ553ZWQIME,RNQB4SFH4DX7B,RMGGBMIVVTPJU,RDJVGMEMJEEZM,R11I303S1BQCT9,R1H7KY4OIM4XC3,R13OEY5VD2OOR7",
    review_title:
      "good,Overall good product but got stop inbetween there is some gap for long term use.,Perfect,Useful,Must buy,Overall nice product,Good product,Amazing product",
    review_content:
      "https://m.media-amazon.com/images/I/711EJ0kjZvL._SY88.jpg,I like this is handy and easy to use.For multiple clothes it's got stop in between.,Was looking for this only. Time saving appliance 👌 Product delivered on time,Easy to use,Very useful for dark clothes,Removes all wollen part , works well,Best and pocket friendly,Helped in removing all the lint from the clothes. Now they look as new as brand new. Just lobe this amazing product. A must buy for your winter clothes",
    img_link:
      "https://m.media-amazon.com/images/I/31g2BiAmVjL._SY300_SX300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Remover-Clothes-Extractor-Battery-Removing/dp/B09JN37WBX/ref=sr_1_121?qid=1672923596&s=kitchen&sr=1-121",
  },
  {
    product_id: "B00P93X2H6",
    product_name:
      "Classmate Pulse Spiral Notebook - 240 mm x 180 mm, Soft Cover, 200 Pages, Unruled",
    category:
      "OfficeProducts|OfficePaperProducts|Paper|Stationery|Notebooks,WritingPads&Diaries|CompositionNotebooks",
    discounted_price: "₹67",
    actual_price: "₹75",
    discount_percentage: "11%",
    rating: 4.1,
    rating_count: "1,269",
    about_product:
      "The cover design of the notebook is subject to change, it depends on stock availability 1 Subject Notebook - Unruled, 200 Pages, Spiral Binding, Soft Cover, 240mm x 180mm Notebooks for every subject for hassle-free note-taking during classes or lectures Classmate uses elemental chlorine free paper This notebook consists of high quality papers Country of Origin: India",
    user_id:
      "AH6NK74TCKWVMLPVFEC44ZLT546Q,AEUNLUIL7UEDSBOHDA52EP3CT43Q,AGKEIYGWTR5DFWUXTQK2GJCADGAA,AHYDGBIJQH2XC4SMUNVX2HGKOELQ,AGERLRPT3Z7WUSIERUPQ3NNUYGBQ,AGBVV6FOZ3OTCYR6XQ7UZL5OOF5A,AEBHFCOMRX6G22X3JLSCKHLXPTOA,AFZZKKAWBJWFT7ZNDHWFPI2LJTLA",
    user_name:
      "Nafisa Nehar,Narinder K.,Mayank,Harsh Raj,Dr.G.K.H.KRISH,Soumava Chakraborty,Sahid,RAJU ACHARJEE",
    review_id:
      "R3QLOAFS794JE2,R3N8H6JX73IGQM,RR2G573NOMISE,R1710I0LBXO0RZ,RSAY82S1YEY1A,R3T3F038IAP2Z5,R2E19RVGQBXFIY,R20HG64QT9A05Z",
    review_title:
      "it's nice. simple and easy.,It's good but I ordered avengers printing I got other one,Not A4 size,Nice product but not value for money,Money not wasted.,Good For Day-To-Day use,medium size notebook,Good for note",
    review_content:
      "I liked because it was aesthetically pleasing.I thought it was thicker. But overall it ok. Go for it.,You can buy but don't go for printing,It is a short copyYou can use it as a diary😀,Like its sharpness and style,Liked it,Product is good ...but I thought it is a A4 pad. But o k..Small but Good.,,Notebook is good",
    img_link:
      "https://m.media-amazon.com/images/I/51o0rLZiIjL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Classmate-Pulse-Spiral-Notebook-Unruled/dp/B00P93X2H6/ref=sr_1_248?qid=1672903007&s=computers&sr=1-248",
  },
  {
    product_id: "B0883LQJ6B",
    product_name:
      "Usha Goliath GO1200WG Heavy Weight 1200-Watt Dry Iron, 1.8 Kg(Red)",
    category:
      "Home&Kitchen|Kitchen&HomeAppliances|Vacuum,Cleaning&Ironing|Irons,Steamers&Accessories|Irons|DryIrons",
    discounted_price: "₹1,199",
    actual_price: "₹1,690",
    discount_percentage: "29%",
    rating: 4.2,
    rating_count: "4,580",
    about_product:
      "Heavy 1.8 kg for effective ironing|power 1200 W for faster heating|Dual Coating Weilberger Gold soleplate for durability|1.8 m long cord length for better reach. Spray : No|360 deg swivel cord, Fully covered convenient plastic body|Overheat safety protection|Indicator light for readiness",
    user_id:
      "AFQAXRM4XEA72PNIMWCW2F53ISWA,AE5VPGHORHY2ZU5RW6B3AEL4CFJQ,AGHHTIPESD2S56DORYF5DK7VWAVA,AGNUZ45QI5DHUL6EFTEDFWHH5TSA,AF265F7UPZDF6O6JA5OZNC4BMURQ,AH7ATUCWGGF2CFH6O2B6JAZLH3RA,AEIRF32A5JCOXLBOHRARCTNE6KPQ,AGOOI3OO3V3Q6GB74PMJ7HCTB2FA",
    user_name:
      "Subanathan,Vaibhav.Vichare,Naveen Kumar,Prosanta Das,Sudarshan Singh Rawat,Periyasamy,Raju,Prashanth Gangula",
    review_id:
      "R293AKJY0KAYU2,R1CKLC9EOIW0CO,R1SFNUH4BC29Q4,R23FF4AI11EGQG,R2ITLBT3D3QIFF,RZ2TK6IVJL936,R1ZCONBNFKG8ZC,R1OJUIJC0SV7DS",
    review_title:
      "Nice,Heavy weight and good product.,Value for money,Looks good one but returned,I like it and good product,Super build quality,Nothing,Best iron box",
    review_content:
      "Value for money, performance well,Review after 1 month. Good product. 4 stars.,Easy to use, comfort to handle nice product,I got this dry iron today and it looks really good and I think it should be the ideal one for dry pressing and weight is quite heavy of 1.8 kg and it's big one but weght might be a problem for week women. But unfortunately I have to return it as lot of  scraches are there on non sticky plate and that will follow a further damaged over there in future. UT here I want to inform you that many people have already got these scratches and they have returned it. So be very careful to verify before using it,I like it overall the best.,Heavy weight but I like it super build quality,Valuable money,Best iron box",
    img_link:
      "https://m.media-amazon.com/images/I/31XPVmD8gUL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Goliath-GO1200WG-Weight-1200-Watt-Maroon/dp/B0883LQJ6B/ref=sr_1_236?qid=1672923603&s=kitchen&sr=1-236",
  },
  {
    product_id: "B08CF3D7QR",
    product_name:
      "Portronics Konnect L POR-1081 Fast Charging 3A Type-C Cable 1.2Meter with Charge & Sync Function for All Type-C Devices (Grey)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹154",
    actual_price: "₹339",
    discount_percentage: "55%",
    rating: 4.3,
    rating_count: "13,391",
    about_product:
      "[CHARGE & SYNC FUNCTION]- This cable comes with charging & Data sync function for smartphones|[HIGH QUALITY MATERIAL]- TPE + Nylon Material to make sure that the life of the cable is enhanced significantly|[LONG CORD]- The Cable is extra thick 1.2 meter long, optimized for an easy use for your comfort at home or office|[MORE DURABLE]-This cable is unique interms of design and multi-use and is positioned to provide the best comfort and performance while using|[UNIVERSAL COMPATIBILITY]-Charge for all Type C USB connectivity devices including MacBook 12 inch, Nexus 5x, Nexus 6p, OnePlus 2, pixel c, Lumia 950, Lumia 950 xl, Nokia n1, etc.",
    user_id:
      "AGYLPKPZHVYKKZHOTHCTYVEDAJ4A,AGTTU64JMX722LYCN3SOWLFPKPAQ,AFWD4ZTM7473CDWARHCDQKK73MTA,AEXCQM3FDLX3YL3UJWWUIAIUJT4A,AHUKYUWRUVRTB3IQGISXWTSPAWLQ,AFWW4UEXAJH7EAB5LTMKMSGLUN2Q,AFM5JL37WY7G6MLQUI4WAXUJME7Q,AFECO24WYFOU2KL7C3DMHTEHRU7Q",
    user_name:
      "Tanya,Anu,Akshay,Vishal Sagara Shetty,Swatilekha Sarkar,Jithindas,IBRAHIM S,Sundaram J.",
    review_id:
      "R11MQS7WD9C3I0,R2AKH69XQY8BY4,R8GBOLYUN5UP6,R1AYVO4R25KJTA,R1HT6XM787V7FV,R339XJL1GMKHA3,R175VFSB2A32HG,R35T9LXYBSP09G",
    review_title:
      "Good for fast charge but not for data transfer,Good cable compares to local the brand.,good but doesnt last,Good product,Good Product,Good and worth it,very good material quality charging speed is 15 watt,Not a fast charger",
    review_content:
      "The cable is efficient in fast charging but in quick data transfer. Overall fine.,I like the usb c  L shape. Nylon Shielded core wire it improves the life of the cable.,i think i buy these every 6 months or so. fast charging stops working after a while. probbly something to do with the cable design. the cable gets twisted over time and I suspect that breaks the high capacity wires inside. but i keep buying it because there arent too many options in an L shaped design,Good and durable product. Sometime the charges doesn't work on few adapters. there might be few cut off or something but works fine on apple adapter, Car charger, USB,The product is really good at affordable price.,Good and fast charging, and value for money,பொருள் உடைய கடினத்தன்மையின் நன்றாக உள்ளது சார்ஜ் ஏறும் வேகம் 15wat,Not a fast charger.  Very slow charging with 65w.  L-shape pin is very useful.",
    img_link:
      "https://m.media-amazon.com/images/I/31dJ+lXJq3L._SY300_SX300_.jpg",
    product_link:
      "https://www.amazon.in/Portronics-POR-1081-Charging-1-2Meter-Function/dp/B08CF3D7QR/ref=sr_1_100?qid=1672895777&s=electronics&sr=1-100",
  },
  {
    product_id: "B09KLVMZ3B",
    product_name:
      "Portronics Konnect L 1.2M POR-1401 Fast Charging 3A 8 Pin USB Cable with Charge & Sync Function (White)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹159",
    actual_price: "₹399",
    discount_percentage: "60%",
    rating: 4.1,
    rating_count: "4,768",
    about_product:
      "[CHARGE & SYNC FUNCTION]- This cable comes with charging & Data sync function|[HIGH QUALITY MATERIAL]- TPE + Nylon Material to make sure that the life of the cable is enhanced significantly|[LONG CORD]- The Cable is extra thick 1.2 meter long, optimized for an easy use for your comfort at home or office|[MORE DURABLE]-This cable is unique interms of design and multi-use and is positioned to provide the best comfort and performance while using|[UNIVERSAL COMPATIBILITY]- Compatible with all devices like iPhone XS, X, XR, 8, 7, 6S, 6, 5S, iPad Pro, iPad mini and iPad Air",
    user_id:
      "AF2XXVO7JUBUVAOBTJ3MNH4DGUFQ,AH6VDJLLPBXKCWXMLBKMBCQ2ESGA,AE642RIGZIT2VPQJOLNUZ34QVWJQ,AFLHNKQH5UQZU3ATISKSMRE2KEDQ,AF2L4MCRCIDOOREQJN7QPQ4QBZCA,AGKLZ4SUHAU47KJXDVHBBEWJODUA,AHESCOYXLCXB56F4JO45X4CZQCYA,AGGHDE6KFZHEDUDJBD5R27AYMEWA",
    user_name:
      "Deepaak Singh,siva k.,MUNDATH BALGOPAL,BOOPATHI,Rakesh,Ana,Xolo,Rushi",
    review_id:
      "R20XIOU25HEX80,R2X55FA2EEUEYM,R393Z224NBTDLN,R3Q4ZCHWSAQD5B,R1AE3A4NSVM9SC,R2U1YAAZE07I1V,R36NVL58WQ7D64,R1E7GPZ569TBIZ",
    review_title:
      "Great but,Worked well for 6 six months that’s it,Compatible with Apple iPad 2nd generation and charging very well.,CABLE,The product is good but the phone gets disconnected at multiple occasions.,Not a fast charging cable,Good item. Value,Amazing product and value for money",
    review_content:
      "Loosing charging cable of apple is costly affair. This wire was great purchase made to correct it,Worked well for six months that’s it, now it’s stopped working, now planning to buy one more because the price has come down to 150,Very good product. Compatible with  iPad 2nd generation  and charging very well. Quality of the product is very good and also works fine. Totally worth for its price.,Product is super,I'm using from last 6 month. Till now it was good functioning. Now I noticed phone gets disconnected at multiple occasions. might be cable may be damaged.Overall worked well for 6 month.,Takes 5-6 hours to charge full.,Good item. Value,It is the best product I have used till now.",
    img_link:
      "https://m.media-amazon.com/images/I/41R08zLK69L._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Portronics-Konnect-POR-1401-Charging-Function/dp/B09KLVMZ3B/ref=sr_1_16?qid=1672909124&s=electronics&sr=1-16",
  },
  {
    product_id: "B094DQWV9B",
    product_name:
      "Kanget [2 Pack] Type C Female to USB A Male Charger | Charging Cable Adapter Converter compatible for iPhone 14, 13, 12,11 Pro Max/Mini/XR/XS/X/SE, Samsung S20 ultra/S21/S10/S8/S9/MacBook Pro iPad (Grey)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Adapters|USBtoUSBAdapters",
    discounted_price: "₹149",
    actual_price: "₹399",
    discount_percentage: "63%",
    rating: 4,
    rating_count: "1,540",
    about_product:
      "👍【USB C TO USB ADAPTER】-This is a USB C FEMALE to USB MALE adapter, used to turn all you USB-A ports of laptops, chargers or other devices into a USB-C port. Gives you the ability to connect USB-C peripherals to devices with USB-A ports.|👍【HIGH-SPEED-TRANSMISSION 】 Supports Single-side USB 3.0 (USB 3.1 Gen 1) 5GB/s superspeed data transfer. Please note that this USB to USB C Adapter only supports single-sided 5Gbps high-speed transmission. The Type-C female port allows you to switch between USB 3.1 speed and USB 2.0 speed with a simple flip of the Type C plug. Now you can enjoy unparalleled transmission quality from your devices!|👍【DATA SYNC AND CHARGING】USB 3.0 (USB 3.1 Gen 1)port, up to 3A, enables up to sync and display movies or music in real time thanks to a 5Gbps transfer speed, approx 10x than USB 2.0; Also, you can edit video in camera directly via port instead of downloading files|👍【SUPERRIOR DURABILITY】Made of Premium aluminum alloy housing with specular precision process, enables plug in/out again and again. Tested and inspected meet USB Standards, fit for USB 3.0 / USB 2.0 devices, built-in 56KΩ pull-up resistor protects your devices from damage. Internal PCMA adopts EMI proof process, more stable performance.|👍【 EASY OPERATION AND PORTABILITY】-Easy to use,just PLUG and PLAY, no driver required. This USB C TO USB 3.0 adapter has the advantages of SIMPLE STRUCTURE ultra COMPACT,LIGHTWEIGHT and PORTABILITY, small enough to leave it in the USB port or anywhere in your package, take it anywhere you want!",
    user_id:
      "AFA6YM4NTFRGHHKYN5U7HUYEVSUA,AEB3EVUTQCHIE3PGITWK72Q6EKTA,AENDMMCGUEYDYJTVD5GZ7VWYOALQ,AGYTNS7EN2WZ2WQGLKN74NA75PNA,AFXQSIUT7B2DVWYGONQGEGVMGFTA,AGBSRQCSUBTYN644BB4FVJBC6RCA,AGK2AGWUMBCU5TCFIZSFDJORZH5A,AG6DLOLZYH4E5ZATU7HOAK4REHSA",
    user_name:
      "Abhi_K,Amazon Customer,Swap,shivam,Abhinav Singh,Pulkit Bhardwaj,Minoy C Mathews,ADITYA SINGH",
    review_id:
      "R1QIWMR6C3F3U0,R1MSGOZTOMZE4B,R20OZCEE82GU0W,RMKY6FED1DV2L,R3BYJ1ULP499GK,R3G93XCNRW5ZRM,R2AKI7N239TKC6,R1QCWFZKUGG13I",
    review_title:
      "Good and does it’s work,Nice product working absolutely fine,Good,Good product,Value for Money,Okay overall,Value for money..,Good product for i phone users",
    review_content:
      "Using it to connect my type C Plantronic headphones to Dell laptop and it’s working fine.,We like this product it is just amazing,support good charging speed.,Nice,Small yet very good accessory for the car. It is very small in size and becomes a part of the car interior.There is no lag in supplying the power and gives an ease to connect phone with USB C type on a USB A port.If you are looking for a good converter then this is it.,Annoying advertisement of asking you to give 5 star rating is in the packaging box of this product.,It is very helpful in charging phones in old cars.  I am using an old car and it only has USB -B Ports. And I am using it for some power banks also...,I had an unused cable c to lightning port but was not being used. I ordered this product and it turn out to be miracle for me now i can use my unused cable with this product. GOOD PRODUCT 👍👍",
    img_link:
      "https://m.media-amazon.com/images/I/51JIngdPfEL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Kanget-Female-Adapter-Standard-Interface/dp/B094DQWV9B/ref=sr_1_171?qid=1672903004&s=computers&sr=1-171",
  },
  {
    product_id: "B07JH1C41D",
    product_name:
      "Wayona Nylon Braided (2 Pack) Lightning Fast Usb Data Cable Fast Charger Cord For Iphone, Ipad Tablet (3 Ft Pack Of 2, Grey)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹649",
    actual_price: "₹1,999",
    discount_percentage: "68%",
    rating: 4.2,
    rating_count: "24,269",
    about_product:
      "[High Compatibility] : iPhone X/XsMax/Xr ,iPhone 8/8 Plus,iPhone 7/7 Plus,iPhone 6s/6s Plus,iPhone 6/6 Plus,iPhone 5/5s/5c/se,iPad Pro,iPad Air 1/2,iPad mini 1/2/3,iPod nano7,iPod touch and more apple devices.|[Fast Charge&Data Sync ] : It can charge and sync simultaneously at a rapid speed, Compatible with any charging adaptor, multi-port charging station or power bank.|[Durability] : Durable nylon braided design with premium aluminum housing and toughened nylon fiber wound tightly around the cord lending it superior durability and adding a bit to its flexibility.|[High Security Level ] : It is designed to fully protect your device from damaging excessive current.Copper core thick+Multilayer shielding, Anti-interference, Protective circuit equipment.",
    user_id:
      "AG3D6O4STAQKAY2UVGEUV46KN35Q,AHMY5CWJMMK5BJRBBSNLYT3ONILA,AHCTC6ULH4XB6YHDY6PCH2R772LQ,AGYHHIERNXKA6P5T7CZLXKVPT7IQ,AG4OGOFWXJZTQ2HKYIOCOY3KXF2Q,AENGU523SXMOS7JPDTW52PNNVWGQ,AEQJHCVTNINBS4FKTBGQRQTGTE5Q,AFC3FFC5PKFF5PMA52S3VCHOZ5FQ",
    user_name:
      "Manav,Adarsh gupta,Sundeep,S.Sayeed Ahmed,jaspreet singh,Khaja moin,Anand,S.ARUMUGAM",
    review_id:
      "R3HXWT0LRP0NMF,R2AJM3LFTLZHFO,R6AQJGUP6P86,R1KD19VHEDV0OR,R3C02RMYQMK6FC,R39GQRVBUZBWGY,R2K9EDOE15QIRJ,R3OI7YT648TL8I",
    review_title:
      "Satisfied,Charging is really fast,Value for money,Product review,Good quality,Good product,Good Product,As of now seems good",
    review_content:
      "Looks durable Charging is fine tooNo complains,Charging is really fast, good product.,Till now satisfied with the quality.,This is a good product . The charging speed is slower than the original iPhone cable,Good quality, would recommend,https://m.media-amazon.com/images/I/81---F1ZgHL._SY88.jpg,Product had worked well till date and was having no issue.Cable is also sturdy enough...Have asked for replacement and company is doing the same...,Value for money",
    img_link:
      "https://m.media-amazon.com/images/I/412fvb7k2FL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Wayona-Braided-WN3LG2-Syncing-Charging/dp/B07JH1C41D/ref=sr_1_98?qid=1672909129&s=electronics&sr=1-98",
  },
  {
    product_id: "B07DJLFMPS",
    product_name: "HP 32GB Class 10 MicroSD Memory Card (U1 TF Card 32GB)",
    category: "Electronics|Accessories|MemoryCards|MicroSD",
    discounted_price: "₹369",
    actual_price: "₹1,600",
    discount_percentage: "77%",
    rating: 4,
    rating_count: "32,625",
    about_product:
      "Class 10, UHS-I, U1 Memory Card with Adapter|Perfect for storing and transferring more mobile content across your devices, including photos, music and movies for entertainment or apps and e-books for school or work|Ideal for the latest tablets, PCs, smartphones and mobile devices|16-128GB: Read speed up to 80MB/s, write minumum 30MB/s|Importer Details: Fortune marketing Pvt Ltd D1/2 -Okhla Industrial Area Phase -II New Delhi 110020|Country of Origin: Taiwan",
    user_id:
      "AE2OFVZSIE6KSBAPG6GMKCER35LA,AFEOAY5PB4XEYIOL6DY5WJBOYSKQ,AEJTETVJ7NY3GMARSTJNPOG3AY3A,AFMQHAPYUAV7ZSPABOAVTNZVESWA,AEGYHN3DWMVH2RZLTP2H2A2U6EHA,AFIWP2JBBUU6SH3MK355UEG4TZGA,AF7XGOMQWMA2ITB72BPIVHL23EJA,AHBTDCFI4HA6ONMJZRTYUXAEP46A",
    user_name:
      "Ajit Kumar Rai,chetan tandel,Tanankirambabu,Mohammed amaan,ashish bajaj,SUMIT KUJUR,Yajnesh,Raj Kishor Singh",
    review_id:
      "RPA8V1051ERUL,R2M7ENP70GK5P4,R3PA1IDUY9QNC8,R1QVT2JWXS2Y8Q,R2D2Z6QVL2FXNO,R2W3Y5HX9WED9J,R2TUAIDPW255N6,RWLGI93AXFKRD",
    review_title:
      "Best,genuine,Nice product,Good product,Value for money,Good,worth of purchase,Good 👍",
    review_content:
      "Best wishes,brought it online as cautious about buying offline coz of fake and overpriced products. using it for my wifi camera. working fine,Nice product,Nice quality product easy to use. Thanks amazon,Well known brand ..Nice product.,Good,worth product,Bahut achcha laga Raha hai",
    img_link:
      "https://m.media-amazon.com/images/I/41z7FRqEerL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/HP-MicroSD-U1-TF-Card-32GB/dp/B07DJLFMPS/ref=sr_1_110?qid=1672903000&s=computers&sr=1-110",
  },
  {
    product_id: "B01FSYQ2A4",
    product_name:
      "boAt Rockerz 400 Bluetooth On Ear Headphones With Mic With Upto 8 Hours Playback & Soft Padded Ear Cushions(Grey/Green)",
    category: "Electronics|Headphones,Earbuds&Accessories|Headphones|On-Ear",
    discounted_price: "₹1,399",
    actual_price: "₹2,990",
    discount_percentage: "53%",
    rating: 4.1,
    rating_count: "97,175",
    about_product:
      "With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going. Inline Remote : No|Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go|Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours|Its lightweight and ergonomic design offers the comfort and ease while you listen to your favourite artists and have fun|The easy access integrated controls with built-in mic offers a smooth user experience and hands-free communication on the go|Stay connected to your sound via not one but two modes: Bluetooth as well as AUX|1 year warranty from the date of purchase.",
    user_id:
      "AFWOX5BA5QS5TCVTNV3EHQXOSCLQ,AGGM4C652EG6WSDEOWBQCR7UXG7Q,AFZ3S6RJS6RVOXVK5OAIT4AX76UA,AFRUXOMHPM4OTISKC4VE3PM45DTQ,AFGX776XSUUA2LIYKLHSXN3PHOXA,AF6XZI4LVIVFP2UTPNVFYGF7JPQQ,AGYX7IY6ZHCU2J6DXRW5SN6LGEVA,AHA3ODJCWS52ZKJYWV2UBFR3AVBA",
    user_name:
      "Sagar,Shreyas,Arjun Thomas,Sachin Yadav,Karthikeya Reddy,Raja,Anku kumar,Sagar kate",
    review_id:
      "R2E3GV1LFGQNFD,R3IM6TBVGY4SYQ,R236B8Q3BSGZJ7,RO9KNXZ2RH2TI,RT2VNM024LSCP,R3PRBLGHPRCZ6A,R1AYA1JIHAVM50,RR81G0GIJQKT9",
    review_title:
      "Worth Every Square Inch.,VFM, Plastic build. Must buy,3 years of extensive usage , delivered the perfomance to its price,Still working after 2 years,Low in price but sound was high,Super head phone under 1300 rs,Wow nice this headphone Just like fall in love🥰 ye kuchh jyada hi ho gya😜,Good quality",
    review_content:
      "-------------------------------------------------UPDATE:20/01/2018-------------------------------------------------It's been 5 months since I first got Boat Rockerz 400. Some of the dislikes I've mentioned earlier in my review are no more dislikes. I said the sound is more or less on a flatter side but I'm quite used to it and \"I'm loving it\".. :) the Second point is I said if you are an audiophile then you may not like it but I was wrong. You might ask why... Here is why:After a long gap, I visited my Father who is an audiophile. He has numerous high-end headphones but unfortunately, he got the attention of my headphone and he just wanted to try it. I said yes (I regret it :( ) he paired it with his device and played a song. Boy!! you got to see the grin on his face :D. He said I'm keeping it you buy another one. Poor me was forced to buy another one. A few days back I got another one :(One thing I noticed in two of my purchase isTHE AUDIO CABLE IS NO GOOD. Both my audio cable had the same issue.----------------------------------------------------------------------------So the moral of the story is: Hide it from your audiophile Dad or brother.. they will unceremoniously snatch it from you.Jokes apart, people, you can't go wrong with this purchase. It's worth every square inch.Happy Shopping...END OF UPDATE---------------------------------------------------I got this product 3 days back, and I got it for Rs. 1299( lightning deal of course) This is an honest unbiased review keeping in mind the price of the product:Three days might not be a sufficient time to review this product but sorry I can't help the excitement...----------------------------------------------------Likes:1> Good built quality-------  4/5It is sturdy, for the price the build quality is great. It is not flimsy. The ear cushions are good enough.------------------------------------------------------2> Sound quality------3.5/5If you are an audiophile this is not for you. Bass is decent nothing to go overboard( as noticed in other reviews). Bass is deep enough for the price.---------------------------------------------------------3> Connectivity: pairing is easy connects like a breeze.------ 4/5----------------------------------------------------------4> Dual Mode- Wired and wireless: Boat rockerz 400 comes with an aux cable.If you run out of charge you could always connect the aux cable and use it as a wired headphone. ( I couldn't find a substantial difference in the quality of music between wired and wireless though :) ) I absolutely loved this feature. ------5/5-----------------------------------------------------------Battery backup: I'm impressed with the battery backup of this beast. I've been using it for 3 days for 2-3 hrs a day still its running. So i guess the 8 hr backup per charge is not a marketing gimmick I presume it's true. So far so good. will update it after a month's usage.------------------------------------------------------------Dislikes:1> Sound quality is more on the flatter side. When you compare it with budget wired headphones like Sennheiser CX 180 Street II bass is not too deep. You won't get that ambiance. Boat's website says:\"Don't just be loud, be loud and clear\", Nope... sorry I've to disappoint you on this. When it's loud it's not at all clear. A lot of distortions are there when you are loud.-----------------------------------------------------------2> Comfort: Believe me, it's not at all comfortable for prolonged usage. Your ear will beg you to take it off after 30-45 mins.. If you have high fortitude you can push it till 1-1.20 hrs... If you could go more than that without taking it off for a minute then you are superhuman...-----------------------------------------------------------3> Range: Boats says 10 meters range... In my experience, if you go beyond 5-6 meters then the voice will break. You will never ever get 10 mtrs range trust me on that. And I'm experiencing occasional breaks in the streaming nothing intrusive so far but I don't know whether it will be a problem down the line. Will let you guys know about it later if it's a problem.------------------------------------------------------------- 4>Flimsy aux cable: I can't complain too much about the aux cable keeping the price in mind. Remember I paid only 1299 for it. But with certain devices, the aux was not working properly. Mi note 3 had issues, Mi 4 also had issues with aux. Not sure whether it's the problem with my device. But it worked flawlessly on my laptop.--------------------------------------------------------------5> Wafer thin service centers: Boat gives 1 yr warranty but what good is it if you can't find any service centers near you. This is a hit or miss guys...---------------------------------------------------------------6> Voice cancellation: I didn't find this effective. Maybe it's just me, not sure.----------------------------------------------------------------7> Microphone is pretty much useless. You can't make calls with this headset.-------------------------------------------------------------------Some alternatives:( These are all wired headphones, comparing them with a wireless may not be a good idea but still, I compare it with them because Boat rockerz comes with an aux cable, and if you are looking for an alternative irrespective of wired or wireless it might be of some use to you)1>Sennheiser CX 180 Street II : I don't think Boat can beat this one's quality. The sound is incomparable- the base is deep, nice fidelity, nice ambiance and for a price of 799 this is unbeatable budget wired in-ear headphone. I own 2 of this beauty. Total value for money. If you are an audiophile and are on a  tight budget then I can't a better alternative than this.2> SoundMagic E10C In-Ear Headphones with Mic (Black/Gold): This is another TVFM earphone3>Sony Extra Bass MDR-XB250 On-Ear Headphones--------------------------------------------------------------------Don't buy it:1> If you are an audiophile ( obviously audiophiles will go only for wired headphones :D )2> If you intend to use it for long hours.----------------------------------------------------------------------Buy it:1> If you are looking for a budget wireless headphone with decent built quality and performance.2> If you require a wired and wireless package in one..-----------------------------------------------------------------------Verdict: I'd give this headphone a score of 3.75/ 5If you are on a budget and you want to enjoy a hassle-free Bluetooth headphone with good performance then CLOSE YOUR EYES AND BUY THIS BEAST trust me you won't regret it you won't be disappointed. In this price range, I couldn't find any other headphone with such a performance. We don't have many options.... Do we?  :P :PThe actual price is Rs. 2999 and Amazon claim they are giving 57% discount. pls don't fall for that. I would not recommend paying more than 1700 rupees for this headphone.--------------------------------------------------------------------------Note: I'm not an expert in this field. This is just a lay man's review.Thank you for reading the review and I hope this will help you with your purchase decision..,My boat wired in ears were giving out after hard use and i wanted a new pair of headphones and i wanted them to be over the head types like this one. I also wanted one with both aux and bluetooth options since i would be using it for the TV, Laptop and my phone. I have fumbled with this strata of the headphone market previously and after buying good for nothing ones from motorola, i chanced upon this.Value for moneyGood bassNice sound qualityGood build, but not premiumIf you can get it below 1000 rs, then it is a very good deal,its difficult to let go of  my boat headphones , i bought this on 2019 for a 1k price on sale , the bluetooth was working fine but it went off after an year , i know this would happen , and thats when the legendary aux cable comes in , ive been using it with the aux cable for almost 2 years again , but later the top headphone band broke off , i used a fevistick to stick it up , and used it , i stretched it even further but it broke again , but there is no difference in soundquality what so ever so far , its been a soldi 3 years since usage of this product , still trying to stretch it further , if it doesnt work , i may hvae to say good by to this beast of a product , and its sad to note that the current boat products on offer fail to deliver this robust quality , they've become the company that focuses on quantity over quality nowadays , evolutions aside , i gotta respect this product for what it has given me so far .,I genuinely reviewed after 2 years and it's still working but once head strip was broke i fixed it by using YouTube video overall it's very good purchase for me.,Don’t think about specs you can blindly buy because it worth it,I recently purchased the boAt Rockerz 400 Bluetooth headphones. They have great sound quality and the soft padded ear cushions are very comfortable. The battery life is also impressive, with up to 8 hours of playback. Overall, I'm very happy with my purchase and would recommend them to anyone looking for a good pair of Bluetooth headphones.,Under 1300 rs it is best head phone.... sound quality super, bass good, noise cancelation not bad, product weight not heavy.,Nice headphone, nhi,bole to jhakas😜Sound quality is very good and bass is also  good but I was expecting more like theatre bass but not like that, hhh laalach karna buri chijh h🤩🤩, hum sudhrenge nhi kabhi😂😂I think u r bored sum of this headphone  mast hai😂😂 enjoying,Good quality, easily connected my lg 4k smart tv",
    img_link:
      "https://m.media-amazon.com/images/I/41zejggGzLL._SX300_SY300_QL70_ML2_.jpg",
    product_link:
      "https://www.amazon.in/Super-Rockerz-400-Bluetooth-Headphones/dp/B01FSYQ2A4/ref=sr_1_307?qid=1672895835&s=electronics&sr=1-307",
  },
  {
    product_id: "B07Z3K96FR",
    product_name:
      "Robustrion Tempered Glass Screen Protector for iPad 10.2 inch 9th Gen Generation 2021 8th Gen 2020 7th Gen 2019",
    category:
      "Computers&Accessories|Accessories&Peripherals|TabletAccessories|ScreenProtectors",
    discounted_price: "₹399",
    actual_price: "₹1,499",
    discount_percentage: "73%",
    rating: 4.1,
    rating_count: "5,730",
    about_product:
      "COMPATIBILITY: Specifically Designed Tempered Glass Screen Protector Guard for iPad 10.2 inch 7th 8th 9th Generation. It will not fit any other model.|HIGH CLARITY AND TRANSPARENCY: Features ultra clarity with 99.9% transparency to allow an optimal, natural viewing experience on your iPad 10.2 inch 7th 8th 9th Generation|FINGERPRINT FREE: Has Hydrophobic Oleophobic Coating, which is smudge-resistant and oil-resistant and can effectively reduce fingerprint marks and also making it easier to clean|9H surface hardness ! that is highly durable & scratch resistant protects your iPad 10.2 inch 7th 8th 9th Generation|Easy Hassle-free & bubble-free installation ! Long lasting protection for your iPad 10.2 inch 7th 8th 9th Generation",
    user_id:
      "AFUWVHBC2SCTJ7VEAWEIEYW5V4KA,AFYBMZW3AZJKJJTALIIXD7ZGEHKA,AFUFHMKHZZMFJX554XNEXXTJXWEQ,AHXXQS4GRLX7EK5BE6LFT6OKTWZA,AGUPGGFPP73O6INTDQ4RCOGZA2HQ,AGNZRKED7ZOR5CWLAVUPIYAYAOGA,AET5GWBU6F666XIYM4PJ6EY5WCKQ,AHQ4S2IRIVYCHMRQ2JX27C6KY3IQ",
    user_name:
      "Dakshvir Singh,Palash Kapuri,Abhijit Gupta,Buyer,Anmol Saxena,Irfaan,Hon,dr sanjay kore (some kore)",
    review_id:
      "R207L99B0HON4H,REU6EKQK98RBL,RM596L5QWH41H,R3S583DFLJ72KS,R2RV6Q4UAGYKUY,R3O59TXWPHOPEO,RMVC7IIYGMZJ8,R2V8YZ8X1YQY5C",
    review_title:
      "Gud for the price, but adhesion quality is not very good,Nothing unique……,Attracts too much finger impressions,Perfect Fit (Almost),Easy to install,They provide tissues and wipes,Work well and easy to install,Gud product in budget",
    review_content:
      "The edges may start gapping out, but overall quality (including touch sensitivity) is good, as for the price tag.,The packaging was very nice. There was a microfibre cloth in the box, though it was basic ,I liked it. Now the main product, it was just perfect in size. Installation process was quite simple. But tempered glass is very fingerprint catchy. In harsh lighting the fingerprints could be noticed easily.,Product is otherwise good, but attracts too much visible finger impressions during routine use with a clean hand.,,Quite easy to install,Very easy even for beginners,,Installation was smooth After installing it screen is responsive n does what it is for",
    img_link:
      "https://m.media-amazon.com/images/I/41cOH84GhGL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Robustrion-Anti-Scratch-iPad-10-2-inch/dp/B07Z3K96FR/ref=sr_1_160?qid=1672903002&s=computers&sr=1-160",
  },
  {
    product_id: "B09XJ1LM7R",
    product_name:
      "7SEVEN® Compatible for Tata Sky Remote Original Set Top HD Box and Suitable for SD Tata Play setup Box Remote Control",
    category: "Electronics|HomeTheater,TV&Video|Accessories|RemoteControls",
    discounted_price: "₹399",
    actual_price: "₹799",
    discount_percentage: "50%",
    rating: 4.3,
    rating_count: 12,
    about_product:
      "[Compatible] All model of dth SD / HD / HD+ Plus / 4K DTH Set Top Box.|[Plug & Play] This is a Universal dth Remote - Also Works with All LED LCD TV (Pairing Required in some models)|[Important] This remote doesn't have feature of recording key and respectively won't support for recording function|[Suggestion] For best performance, please insert new batteries before using (Batteries Not Included)|[Caution] This is an Imported Generic Product & Not Original Remote By TataSky.",
    user_id: "AE242TR3GQ6TYC6W4SJ5UYYKBTYQ",
    user_name: "anurag jain",
    review_id: "R38OAD16RVS9D4",
    review_title: "do not buy",
    review_content:
      "tv on off not working, so difficult to battery really a bad product",
    img_link:
      "https://m.media-amazon.com/images/I/31IS376AeYL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/7SEVEN%C2%AE-Compatible-Control-Replacement-Original/dp/B09XJ1LM7R/ref=sr_1_174?qid=1672909133&s=electronics&sr=1-174",
  },
  {
    product_id: "B08CF3B7N1",
    product_name:
      "Portronics Konnect L 1.2M Fast Charging 3A 8 Pin USB Cable with Charge & Sync Function for iPhone, iPad (Grey)",
    category:
      "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables",
    discounted_price: "₹154",
    actual_price: "₹399",
    discount_percentage: "61%",
    rating: 4.2,
    rating_count: "16,905",
    about_product:
      "[CHARGE & SYNC FUNCTION]- This cable comes with charging & Data sync function|[HIGH QUALITY MATERIAL]- TPE + Nylon Material to make sure that the life of the cable is enhanced significantly|[LONG CORD]- The Cable is extra thick 1.2 meter long, optimized for an easy use for your comfort at home or office|[MORE DURABLE]-This cable is unique interms of design and multi-use and is positioned to provide the best comfort and performance while using|[UNIVERSAL COMPATIBILITY]- Compatible with all devices like iPhone XS, X, XR, 8, 7, 6S, 6, 5S, iPad Pro, iPad mini and iPad Air",
    user_id:
      "AE3Q6KSUK5P75D5HFYHCRAOLODSA,AFUGIFH5ZAFXRDSZHM4QB2KPKFUQ,AFK4NJOLFSJGWLOJIUIAROJF6YVA,AFUOTYRFUXVPEBGIXVZZ7DR3CZUA,AFDLRSXKDZ6U3U3KD46SQLFGZQRA,AH5VLM66SIK7J3IRG4NY7XVOQ55A,AE3MQNNHHLUHXURL5S7IAR7JTGNQ,AFSEOFZY67MYC7UAJU264Z5NFTLA",
    user_name:
      "rahuls6099,Swasat Borah,Ajay Wadke,Pranali,RVK,Bhargav,Durai Vignesh,Amazon Customer",
    review_id:
      "R1BP4L2HH9TFUP,R16PVJEXKV6QZS,R2UPDB81N66T4P,R3KK4GT934ST3I,RCFHMWUSBIJO,RDO7DACXMAJ84,R3A6MEZL3LY66Z,R1ESIEKPGAYA29",
    review_title:
      "As good as original,Decent,Good one for secondary use,Best quality,GOOD,Amazing product at a mind blowing price!,Nice Quality,Good product",
    review_content:
      "Bought this instead of original apple, does the work for 150rs, not as fast as apple charger but its a good option if you want cheap and good product, bought it for iPad pro 10.5 and it's working flawlessly, build quality is ok, its not like i am gonna hang my clothes on it and i want a very strong cable, even a braided cable stop working after a year, i have used both Anker and Apple store strong braided cable they all stop working after a year so please don't buy high end cables just for that instead choose a this one and even if it's stops working withing a year you only loose 150rs compares to 2000rs.UPDATE------------------------------------pin has stopped charging from one side, now i have to slip the pin to charge from other side, but i will update and let know for how long does it work,,It’s good. Not sure about durability as the pin area feels a bit fragile,Does not support apple carplaySo was little disappointed about thatOther than that cable is made up of very good quality,Best to buy,100% NOT FATHFUL,Writing this review post 10 months and 3 orders of the same product.Honestly Portronics Konnect L lightning cable works like magic with the original Apple charging brick.Seeing the price of the cable I initially hesitated buying as it was as low as ₹99/- with the offers and so I wasn’t sure if it would work well with my iPhone 12 or whether it would impact my iPhone’s battery health because all the other lightning cable brands were costing over ₹350/- like Wayona, Amazon Basics, etc.Earlier I was using Wayona Brand lightning cable with eventually frayed and stopped working.Charging Speed:Charges my iPhone fast enough almost similar compared to the original cable level when used with 12W Original Apple power adapter.Quality and Durability:Great quality braided cable and doesn’t tangle easily and can withstand day-to-day usage.L-Shaped pin:This is very innovative by Portronics and it makes sure the cable doesn’t get damaged even if used while charging.CarPlay and Data Sync:Works smoothly with CarPlay and syncs data effortlessly.PS: I have used this cable only with the Original Apple Charging Brick and extremely satisfied with its performance.,Better than I expect the product I like that Quality and I plan to buy same type cable come with usb C to Lighting cable for emergency purpose that much I love this cable. Buy for this cable only emergency uses only since Good one,Good product and value for money",
    img_link:
      "https://m.media-amazon.com/images/I/31VzNhhqifL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Portronics-Konnect-POR-1080-Charging-Function/dp/B08CF3B7N1/ref=sr_1_5?qid=1672909124&s=electronics&sr=1-5",
  },
  {
    product_id: "B07KSMBL2H",
    product_name:
      "AmazonBasics Flexible Premium HDMI Cable (Black, 4K@60Hz, 18Gbps), 3-Foot",
    category: "Electronics|HomeTheater,TV&Video|Accessories|Cables|HDMICables",
    discounted_price: "₹219",
    actual_price: "₹700",
    discount_percentage: "69%",
    rating: 4.4,
    rating_count: "4,26,973",
    about_product:
      "Flexible, lightweight HDMI cable for connecting media devices to playback display such as HDTVs, projectors, and more|Compatible with Blu-Ray players, computers, Apple TV, Roku, cable, PS4, Xbox One, and other HDMI-compatible devices|Solid copper conductors and full metal jacket shielding for durability and high-performance connectivity|Supports Ethernet, 3D, 4K video and Audio Return Channel (ARC) and meets the latest HDMI standards|Supports bandwidth up to 18Gbps and is backwards compatible with earlier versions|Includes a 3 foot cable",
    user_id:
      "AEYJ5I6JZZPOJB6MGWRQOHRQLPSQ,AFY5TVFOMVHGBPBTIJODYDQRZM5Q,AE3O6366WGEQAANKJ76QETTUQQTQ,AEQIJCPWSBCDKUO5VROXXHWX3PPA,AGVIAQK2HQ47P7UVXHW2NBAEU7YQ,AE3D5CJ2GDUP5SQ3AAYMVAGDTX7A,AH77IQRYD54XCRMCO7XEAIAYCLPA,AEA2HQHMFG3ZGJFOLLJQ65WKIZUQ",
    user_name:
      "Rishav Gossain,Shashank Mallamraju,Purnendu,gunasekaran desomayananam,Anto RK,Sukrit Basak,Manoj Kumar,Sethuram.S",
    review_id:
      "R1FKOKZ3HHKJBZ,R2WNMZI1EXTA0H,RCA1M3W4RIXUR,R3BKCLL6D7ZLIX,REVSR0ILY3547,R15W5KMQB95IV5,R10PB68FRUHT5V,R3TLCE9JSBU3UP",
    review_title:
      "It's quite good and value for money,Works well,Hdmi cable,Value for money,All good,Gets the job done,Delivery was good,This one was my need to purchase",
    review_content:
      "I am using it for 14 days now. The experience is pretty good as of now. Picture quality is also not bad. Don't expect something out of the world at this price point. But you can go for it if you have a tight budget.,Initial impressions: works as said, glad I didn’t go for cheaper options (not that it’s too costly) just plug and play. Will update if it screws up,The hdmi cable is good to watch movie,sports and its gives better quality while connecting your laptop with TV and play 🎮.I loved it,Works as expected. Length of the cable is short and it was mentioned also satisfied my requirement. If you need more length better look other options.,All good,It's the best HDMI cable at this price range. No problems yet. Just go for it !!,I was expecting this to be delivered on time and it was delivered on time.Product is good as i have tried other cables and wires from Amazon basica brand.,Good one",
    img_link:
      "https://m.media-amazon.com/images/I/41nPYaWA+ML._SY300_SX300_.jpg",
    product_link:
      "https://www.amazon.in/AmazonBasics-Flexible-HDMI-Cable-3-Foot/dp/B07KSMBL2H/ref=sr_1_14?qid=1672909124&s=electronics&sr=1-14",
  },
  {
    product_id: "B07H5PBN54",
    product_name:
      "INDIAS®™ Electro-Instant Water Geyser A.B.S. Body Shock Proof Can be Used in Bathroom, Kitchen, wash Area, Hotels, Hospital etc.",
    category:
      "Home&Kitchen|Heating,Cooling&AirQuality|WaterHeaters&Geysers|InstantWaterHeaters",
    discounted_price: "₹999",
    actual_price: "₹2,600",
    discount_percentage: "62%",
    rating: 3.4,
    rating_count: 252,
    about_product:
      "Just put it in the water tap and enjoy continuous flow of hot water. Get running hot water within 4 seconds of operation with it's 3 KV ISI marked heating element. Fills 20 Ltr of bucket within 5-10 minutes|This is portable, eazy to install, fit and compact. Can be used in bathroom, kitchen, wash area, hotels, hospital do-it-yourself instruction booklet it can be installed without addition plumbing and fitting|Specifications · Body - Poly polypropylene(Shock proof) · Heating element - Tubler type(3 KVs), ISI marked · Thermostat - Copper, ISI marked · Cable - White, 1 Meter, ISI marked · Pin-top - 16Amp, ISI marked · PVC pipe and nipple|Can be used in bathroom, kitchen, wash area, hotels, hospital",
    user_id:
      "AFM3U2B3HNE4E5JV4Z6K7WD3LRUQ,AGQAYI2H5TL53UE55XVUIDAMSGLA,AE42BCXRYURRUEFT4LVAFCIOCDDA,AGIRPVIAHKBO5TNOXFX6RU5NFBUA,AEQUMN77VINPOKTGOIRX6PREJSNQ,AFWNCMMSDZDDVHVBKKDK4ZK4HILA,AHCXXOQVLFSHJOIKXMOHUSZJSDOQ,AGWU3MU6IYK77TJSYT5UIOD2IC3A",
    user_name:
      "SATENDRA SAINI,AKSHAY KHOWAL,Daksh,amar,Veera,Nand Kishore Sharma,Tanvir,Rajesh Kumar",
    review_id:
      "RCFFXI7HE5S1O,R3DIB02TOTSYSE,R2LUFMT90IY4QA,RXT32QTE7RUQ1,R2HOQ536IJUJM4,R1DSBS8TI7TATL,RWQ5WXJM5SYQM,R1QYJE3308FNC3",
    review_title:
      "Current issue in output water,Value for money,Great Product for Kitchen,Bakara product please don't purches,Awesomee,It can be hanged any where it is a portable  water geser.,very bad product not ,work even 3 months, as well as seller is not supporting in warranty,Good equipment",
    review_content:
      "Current problem in water,I would say not a bad purchase. As the size is small it can hot hold lot of hot water but still very handy for kitchen. If used with very moderate tap speed, it can give you moderate warm water continually which is a plus. Should give it a try if looking for cheaper and best option for kitchen use.,It's very easy to install & sufficient warm water for kitchen . Sufficient warm for bath also . Value for money. First day usage review.,The product was very bad because curent pass in body so don't purches this product,The portable geyser is awesome and i used today the whole day  and in 9 degree temperature if u get continous running hot water in kitchen nothing is best ,i really really loved it,must must purchase it,thank you so much for such a useful product👍👍😊😊,Easy to hang.It can be hanged at any place.,very bad product not ,work even 3 months, as well as seller is not supporting in warranty,I liked the size. It is light and easy to install.",
    img_link:
      "https://m.media-amazon.com/images/I/41OXzplcjtL._SX300_SY300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Indias-Instant-Bathroom-Kitchen-Hospital/dp/B07H5PBN54/ref=sr_1_246?qid=1672923605&s=kitchen&sr=1-246",
  },
  {
    product_id: "B0B1YVCJ2Y",
    product_name:
      "Acer 80 cm (32 inches) I Series HD Ready Android Smart LED TV AR32AR2841HDFL (Black)",
    category: "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions",
    discounted_price: "₹11,499",
    actual_price: "₹19,990",
    discount_percentage: "42%",
    rating: 4.3,
    rating_count: "4,703",
    about_product:
      "Resolution : HD Ready (1366x768) | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle|Connectivity: Dual band Wifi | 2 way Bluetooth | HDMI ports 2.0 x 2 (HDMI 1 supports ARC) to connect personal computer, laptop, set top box, Blu-ray speakers or a gaming console | USB ports 2.0 x 2 to connect hard drives or other USB device|Sound: 24 Watts Output | High Fidelity Speakers with Dolby Audio | 5 Sound Modes - Movie, Music, Standard, News, Sports|Smart Tv Features: Google certified Android TV 11 | Google Assistant | Chromecast built-in | Voice controlled Smart Remote | Hotkeys for Quick Access - Netflix, Prime Video, YouTube, Disney+Hotstar | 5 Picture Mode | 1.5GB RAM | 8GB Storage | 64bit Quad Core Processor|Display : 16.7 Million Colours | Wide Colour Gamut | Intelligent Frame Stabilization Engine | HDR10+ | Super Brightness | Micro Dimming | Blue Light Reduction|Warranty Information: 1 year comprehensive warranty provided by the manufacturer from date of purchase|Installation: Installation/Wall mounting/demo will be arranged by AHS Team. For any other information, please contact Amazon customer support | Wall Mount is not included in the box and will be charged at the time of installation|Easy Returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description",
    user_id:
      "AFSMISGEYDYIP3Z42UTQU4AKOYZQ,AF5ILQY4KFDTO5XHHBJ42W5DXCZQ,AFBK3X6D3AHEHSYYXPL4L6JEMSLQ,AFNB6YVNGE6IT3AWQVSIG2TJ5L3Q,AGGKMIGXUM3JRNVY7HZ3JHPJ7WTQ,AFMECPERM2GI2XQJSBWEPZKODISQ,AETPKXNOTUEX5GH7WL7XQHDR5M7Q,AERFCJ6BOMVO5YW5XM5Z2ESOIK3A",
    user_name:
      "Ayush,ROHIT A.,Kedar,Haran,Santosh Ghante,KRISHNENDU,Harindra,sangamesh",
    review_id:
      "R1EBS3566VCSCG,R24MB66WRPSN2A,R25UU2M1B9BO5X,R1NXW7PGVND2LE,R3OSBPH7X9AQUK,R2I8RVEPDM0IMQ,R5RES2LABIW7Q,R3A3IRV8ZWP1U9",
    review_title:
      "Wonderful TV and Awful installation service from amazon,Acer Television Review,It's a good product for that price.,Good for the price,Almost a complete package,Nice Product,Good product,Super designed",
    review_content:
      "About the TV - Wonderful---------------------------------------------------------------Probably the best TV in this price range (INR13000).Good - Google interface, loaded with features, lightweight, 55 watt power consumption, stable designAverage - Sound and Picture quality is quite good but if you compare it with premium brands then obviously not that good.Features- Most of the streaming apps available and compatible- You can connect with WiFi, LAN Cable, HDMI, Set top box, Laptop, USB, Gaming console, Old dish cable, and direct TV antenna as well- Built in chromecast to cast any compatible app directly from phone to TV over same WiFi networkWays to connect phone -1. Via cast feature on mobile apps - no password needed only need to be on the same WiFi network2. Via chromecast app - project only selected media (pics, videos) or entire phone screenWays to connect PC/Laptop -1. Windows cast option - project the entire laptop screen on TV using windows cast option ( need to be connected on same WiFi network2. Via HDMI cableAbout the Amazon installation service - Awful-------------------------------------------------------1. The technician brought a cheap hanging hook that had MRP INR116 on it and asked for INR499 for it without any receipt. He kept telling that it was not for sale and company had sent this specially. However, it clearly had MRP mentioned on it2. I went to market and bought a much better cabinet for just INR200 and for installation of that as well, technician was really adamant to drill the two required holes on top. He just drilled one on top and one on bottom and kept all the other spare screws ( which I had bought ) with him. After about half an hour of arguments, he finally drilled the other required holes. And for all this, he kept cussing me that I wasted his time. There was no assistance from the person who represented the service agency as well.This whole process took me two hours to complete that too with lots of arguments. This was the worst installation experience in my life so far.Bottomline - Please do not avail the 'so called free' installation service from Amazon. It is just a scam. Instead call the acer support. They will do the job much better.,After using it for 2 months, here are it's pros and cons:Pros :1. Great picture quality. It's awesome.2. Blacks are very good and is adjustable.3. Sound with 30db is very good4. Looks great with thin besel5. Remote comes with favorite OTT buttons.6. Content upscaling is very good.Cons:1. Remote could have been better. Can't use DTH remote to turn on both televisison and set top box.2. Remote operation is bit complex.3. Motion technology not great. There is a noticeable blur when watching moving ballson OTT, but it decreases when you switch to DTH.Overall, it's a nice buy at this price point. I think I am getting fairly better picture quality and sound. I am satisfied with the product.,Product has good picture quality. Good product at that price with 25w sound. Applications running smoothly. 3 months older & no issues yet. It's running smoothly.,You get decent features for the price you pay. Screen resolution might be. Set back as you may find pixalation. Overall it's good,I am amazed with the picture quality of this 720p (HD Ready) TV. It is truly an amazing panel. I found it suitable for a viewing distance of between 6 to 10 feet. Any nearer it may not look very crisp and any farther, it will feel like a very small size. The speakers are also very good for the price and can get very loud without any distortions. However, since the speaker is downward firing, the experience will vary based on whether the TV is wall mounted or kept on a stand.The remote is good, voice search works well for me. TV start up takes a long time in my opinion, but I have not compared it against any other 32 inch TV and hence do not know where it stands among peers.5 GHz Wifi works very well even across walls. Only negative aspect I faced is w.r.t the experience of using my bluetooth headphones/earphones. Firstly, the connection sometimes doesn't happen automatically after a  restart - which means I have to remove and re-discover the device thru the menu which is not simple. Secondly, the signal itself seems to be very weak and even at a distance of 8 feet in front of the TV, the signal breaks even if you move your head by 2-3 inches.However, I am still super happy with this TV. I got it for 8k during the launch offer and it is totally worth it and is recommended from my side.,At this price range(₹11499/-)it is good quality product on this market..acer only should work with Sound quality improvement otherwise all ok.Picture quality really impressive,wifi connectivity good,easy to install,boderless screen design is premium and also google voice support is good(sometimes lagging).No major issues found on this TV.Just go for it.,Vellu for money. Good product,Very nice productSave money",
    img_link:
      "https://m.media-amazon.com/images/I/41gikeSuhAL._SY300_SX300_QL70_FMwebp_.jpg",
    product_link:
      "https://www.amazon.in/Acer-inches-Ready-Android-AR32AR2841HDFL/dp/B0B1YVCJ2Y/ref=sr_1_26?qid=1672909125&s=electronics&sr=1-26",
  },
];