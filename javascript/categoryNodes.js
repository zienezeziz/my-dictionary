﻿// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Don't use icons
USEICONS = 0

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = '../images/' //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>Categories</i>", "")
  aux1 = insFld(foldersTree, gFld("Universe, creation", "c001.htm"))
    aux2 = insFld(aux1, gFld("Sky", "c002.htm"))
      aux3 = insFld(aux2, gFld("Sun", "c003.htm"))
        aux4 = insFld(aux3, gFld("Moon", "c004.htm"))
        aux4 = insFld(aux3, gFld("Star", "c005.htm"))
      aux3 = insFld(aux2, gFld("Weather", "c006.htm"))
        aux4 = insFld(aux3, gFld("Wind", "c007.htm"))
        aux4 = insFld(aux3, gFld("Cloud", "c008.htm"))
        aux4 = insFld(aux3, gFld("Rain", "c009.htm"))
    aux2 = insFld(aux1, gFld("World", "c010.htm"))
      aux3 = insFld(aux2, gFld("Land", "c011.htm"))
        aux4 = insFld(aux3, gFld("Mountain", "c012.htm"))
        aux4 = insFld(aux3, gFld("Forest, grassland, desert", "c013.htm"))
      aux3 = insFld(aux2, gFld("Substance, matter", "c014.htm"))
        aux4 = insFld(aux3, gFld("Rock", "c015.htm"))
        aux4 = insFld(aux3, gFld("Metal", "c016.htm"))
        aux4 = insFld(aux3, gFld("Mineral", "c017.htm"))
        aux4 = insFld(aux3, gFld("Jewel", "c018.htm"))
    aux2 = insFld(aux1, gFld("Water", "c019.htm"))
      aux3 = insFld(aux2, gFld("Bodies of water", "c020.htm"))
        aux4 = insFld(aux3, gFld("Ocean, lake", "c021.htm"))
        aux4 = insFld(aux3, gFld("River", "c022.htm"))
    aux2 = insFld(aux1, gFld("Plant", "c023.htm"))
      aux3 = insFld(aux2, gFld("Tree", "c024.htm"))
      aux3 = insFld(aux2, gFld("Grass, herb, vine", "c025.htm"))
      aux3 = insFld(aux2, gFld("Parts of a plant", "c026.htm"))
    aux2 = insFld(aux1, gFld("Animal", "c027.htm"))
      aux3 = insFld(aux2, gFld("Types of animals", "c028.htm"))
        aux4 = insFld(aux3, gFld("Mammal", "c029.htm"))
          aux5 = insFld(aux4, gFld("Hoofed animals", "c030.htm"))
        aux4 = insFld(aux3, gFld("Bird", "c031.htm"))
        aux4 = insFld(aux3, gFld("Reptile", "c032.htm"))
          aux5 = insFld(aux4, gFld("Crocodile", "c033.htm"))
        aux4 = insFld(aux3, gFld("Amphibian", "c034.htm"))
        aux4 = insFld(aux3, gFld("Fish", "c035.htm"))
        aux4 = insFld(aux3, gFld("Insect", "c036.htm"))
        aux4 = insFld(aux3, gFld("Small animals", "c037.htm"))
      aux3 = insFld(aux2, gFld("Parts of an animal", "c038.htm"))
      aux3 = insFld(aux2, gFld("Animal actions", "c039.htm"))
        aux4 = insFld(aux3, gFld("Animal movement", "c040.htm"))
        aux4 = insFld(aux3, gFld("Animal eating", "c041.htm"))
  aux1 = insFld(foldersTree, gFld("Person", "c042.htm"))
    aux2 = insFld(aux1, gFld("Body", "c043.htm"))
      aux3 = insFld(aux2, gFld("Head", "c044.htm"))
        aux4 = insFld(aux3, gFld("Eye", "c045.htm"))
        aux4 = insFld(aux3, gFld("Ear", "c046.htm"))
        aux4 = insFld(aux3, gFld("Nose", "c047.htm"))
        aux4 = insFld(aux3, gFld("Mouth", "c048.htm"))
        aux4 = insFld(aux3, gFld("Tooth", "c049.htm"))
      aux3 = insFld(aux2, gFld("Torso", "c050.htm"))
      aux3 = insFld(aux2, gFld("Limb", "c051.htm"))
        aux4 = insFld(aux3, gFld("Arm", "c052.htm"))
        aux4 = insFld(aux3, gFld("Finger, toe", "c053.htm"))
      aux3 = insFld(aux2, gFld("Hair", "c054.htm"))
      aux3 = insFld(aux2, gFld("Bone, joint", "c055.htm"))
      aux3 = insFld(aux2, gFld("Internal organs", "c056.htm"))
        aux4 = insFld(aux3, gFld("Heart", "c057.htm"))
    aux2 = insFld(aux1, gFld("Body functions", "c058.htm"))
      aux3 = insFld(aux2, gFld("Bleed, blood", "c059.htm"))
      aux3 = insFld(aux2, gFld("Urinate, urine", "c060.htm"))
    aux2 = insFld(aux1, gFld("Sense, perceive", "c061.htm"))
      aux3 = insFld(aux2, gFld("See", "c062.htm"))
        aux4 = insFld(aux3, gFld("Look", "c063.htm"))
        aux4 = insFld(aux3, gFld("Appearance", "c064.htm"))
          aux5 = insFld(aux4, gFld("Beautiful", "c065.htm"))
          aux5 = insFld(aux4, gFld("Ugly", "c066.htm"))
      aux3 = insFld(aux2, gFld("Hear", "c067.htm"))
        aux4 = insFld(aux3, gFld("Sound", "c068.htm"))
      aux3 = insFld(aux2, gFld("Taste", "c069.htm"))
      aux3 = insFld(aux2, gFld("Smell", "c070.htm"))
    aux2 = insFld(aux1, gFld("Body condition", "c071.htm"))
      aux3 = insFld(aux2, gFld("Tired", "c072.htm"))
      aux3 = insFld(aux2, gFld("Rest", "c073.htm"))
    aux2 = insFld(aux1, gFld("Healthy", "c074.htm"))
      aux3 = insFld(aux2, gFld("Sick", "c075.htm"))
        aux4 = insFld(aux3, gFld("Recover from sickness", "c076.htm"))
      aux3 = insFld(aux2, gFld("Injure", "c077.htm"))
      aux3 = insFld(aux2, gFld("Symptom of disease", "c078.htm"))
        aux4 = insFld(aux3, gFld("Pain", "c079.htm"))
      aux3 = insFld(aux2, gFld("Treat disease", "c080.htm"))
        aux4 = insFld(aux3, gFld("Medicine", "c081.htm"))
    aux2 = insFld(aux1, gFld("Life", "c082.htm"))
      aux3 = insFld(aux2, gFld("Marriage", "c083.htm"))
        aux4 = insFld(aux3, gFld("Wedding", "c084.htm"))
      aux3 = insFld(aux2, gFld("Birth", "c085.htm"))
      aux3 = insFld(aux2, gFld("Stage of life", "c086.htm"))
        aux4 = insFld(aux3, gFld("Child", "c087.htm"))
        aux4 = insFld(aux3, gFld("Old person", "c088.htm"))
      aux3 = insFld(aux2, gFld("Male, female", "c089.htm"))
        aux4 = insFld(aux3, gFld("Man", "c090.htm"))
        aux4 = insFld(aux3, gFld("Woman", "c091.htm"))
      aux3 = insFld(aux2, gFld("Die", "c092.htm"))
        aux4 = insFld(aux3, gFld("Kill", "c093.htm"))
  aux1 = insFld(foldersTree, gFld("Language and thought", "c094.htm"))
    aux2 = insFld(aux1, gFld("Think", "c095.htm"))
      aux3 = insFld(aux2, gFld("Mind", "c096.htm"))
      aux3 = insFld(aux2, gFld("Learn", "c097.htm"))
        aux4 = insFld(aux3, gFld("Study", "c098.htm"))
      aux3 = insFld(aux2, gFld("Know", "c099.htm"))
      aux3 = insFld(aux2, gFld("Understand", "c100.htm"))
        aux4 = insFld(aux3, gFld("Understandable", "c101.htm"))
      aux3 = insFld(aux2, gFld("Remember", "c102.htm"))
        aux4 = insFld(aux3, gFld("Memorize", "c103.htm"))
    aux2 = insFld(aux1, gFld("Want", "c104.htm"))
      aux3 = insFld(aux2, gFld("Offer", "c105.htm"))
        aux4 = insFld(aux3, gFld("Accept", "c106.htm"))
    aux2 = insFld(aux1, gFld("Emotion", "c107.htm"))
      aux3 = insFld(aux2, gFld("Feel good", "c108.htm"))
        aux4 = insFld(aux3, gFld("Like, love", "c109.htm"))
          aux5 = insFld(aux4, gFld("Enjoy doing something", "c110.htm"))
          aux5 = insFld(aux4, gFld("Happy for", "c111.htm"))
        aux4 = insFld(aux3, gFld("Happy", "c112.htm"))
      aux3 = insFld(aux2, gFld("Feel bad", "c113.htm"))
        aux4 = insFld(aux3, gFld("Sad", "c114.htm"))
          aux5 = insFld(aux4, gFld("Dislike", "c115.htm"))
          aux5 = insFld(aux4, gFld("Hate, detest", "c116.htm"))
    aux2 = insFld(aux1, gFld("Communication", "c117.htm"))
      aux3 = insFld(aux2, gFld("Say", "c118.htm"))
        aux4 = insFld(aux3, gFld("True", "c119.htm"))
          aux5 = insFld(aux4, gFld("Tell the truth", "c120.htm"))
        aux4 = insFld(aux3, gFld("Speak with others", "c121.htm"))
          aux5 = insFld(aux4, gFld("Call", "c122.htm"))
          aux5 = insFld(aux4, gFld("Greet", "c123.htm"))
        aux4 = insFld(aux3, gFld("Praise", "c124.htm"))
          aux5 = insFld(aux4, gFld("Thank", "c125.htm"))
      aux3 = insFld(aux2, gFld("Make speech", "c126.htm"))
        aux4 = insFld(aux3, gFld("News, message", "c127.htm"))
      aux3 = insFld(aux2, gFld("Language", "c128.htm"))
        aux4 = insFld(aux3, gFld("Word", "c129.htm"))
      aux3 = insFld(aux2, gFld("Sign, symbol", "c130.htm"))
        aux4 = insFld(aux3, gFld("Laugh", "c131.htm"))
        aux4 = insFld(aux3, gFld("Cry, tear", "c132.htm"))
      aux3 = insFld(aux2, gFld("Reading and writing", "c133.htm"))
        aux4 = insFld(aux3, gFld("Write", "c134.htm"))
        aux4 = insFld(aux3, gFld("Written material", "c135.htm"))
        aux4 = insFld(aux3, gFld("Read", "c136.htm"))
    aux2 = insFld(aux1, gFld("Teach", "c137.htm"))
  aux1 = insFld(foldersTree, gFld("Social behavior", "c138.htm"))
    aux2 = insFld(aux1, gFld("Relationships", "c139.htm"))
      aux3 = insFld(aux2, gFld("Friend", "c140.htm"))
        aux4 = insFld(aux3, gFld("Girlfriend, boyfriend", "c141.htm"))
      aux3 = insFld(aux2, gFld("Types of people", "c142.htm"))
      aux3 = insFld(aux2, gFld("Kinship", "c143.htm"))
        aux4 = insFld(aux3, gFld("Related by birth", "c144.htm"))
          aux5 = insFld(aux4, gFld("Grandfather, grandmother", "c145.htm"))
          aux5 = insFld(aux4, gFld("Father, mother", "c146.htm"))
          aux5 = insFld(aux4, gFld("Son, daughter", "c147.htm"))
          aux5 = insFld(aux4, gFld("Grandson, granddaughter", "c148.htm"))
          aux5 = insFld(aux4, gFld("Uncle, aunt", "c149.htm"))
          aux5 = insFld(aux4, gFld("Nephew, niece", "c150.htm"))
        aux4 = insFld(aux3, gFld("Related by marriage", "c151.htm"))
          aux5 = insFld(aux4, gFld("Husband, wife", "c152.htm"))
          aux5 = insFld(aux4, gFld("In-law", "c153.htm"))
    aux2 = insFld(aux1, gFld("Social activity", "c154.htm"))
      aux3 = insFld(aux2, gFld("Play, fun", "c155.htm"))
    aux2 = insFld(aux1, gFld("Behavior", "c156.htm"))
      aux3 = insFld(aux2, gFld("Love", "c157.htm"))
        aux4 = insFld(aux3, gFld("Hate, ill will", "c158.htm"))
      aux3 = insFld(aux2, gFld("Culture", "c159.htm"))
        aux4 = insFld(aux3, gFld("Custom", "c160.htm"))
    aux2 = insFld(aux1, gFld("Prosperity, trouble", "c161.htm"))
      aux3 = insFld(aux2, gFld("Trouble", "c162.htm"))
        aux4 = insFld(aux3, gFld("Disaster", "c163.htm"))
    aux2 = insFld(aux1, gFld("Government", "c164.htm"))
      aux3 = insFld(aux2, gFld("Citizen", "c165.htm"))
        aux4 = insFld(aux3, gFld("Foreigner", "c166.htm"))
      aux3 = insFld(aux2, gFld("Region", "c167.htm"))
        aux4 = insFld(aux3, gFld("City", "c168.htm"))
    aux2 = insFld(aux1, gFld("Law", "c169.htm"))
      aux3 = insFld(aux2, gFld("Laws", "c170.htm"))
    aux2 = insFld(aux1, gFld("Conflict", "c171.htm"))
      aux3 = insFld(aux2, gFld("War", "c172.htm"))
        aux4 = insFld(aux3, gFld("Military organization", "c173.htm"))
          aux5 = insFld(aux4, gFld("Soldier", "c174.htm"))
        aux4 = insFld(aux3, gFld("Weapon, shoot", "c175.htm"))
      aux3 = insFld(aux2, gFld("Peace", "c176.htm"))
        aux4 = insFld(aux3, gFld("Repent", "c177.htm"))
          aux5 = insFld(aux4, gFld("Request forgiveness", "c178.htm"))
    aux2 = insFld(aux1, gFld("Religion", "c179.htm"))
      aux3 = insFld(aux2, gFld("Practice religion", "c180.htm"))
        aux4 = insFld(aux3, gFld("Pray", "c181.htm"))
        aux4 = insFld(aux3, gFld("Offering, sacrifice", "c182.htm"))
      aux3 = insFld(aux2, gFld("Heaven, hell", "c183.htm"))
      aux3 = insFld(aux2, gFld("Religious things", "c184.htm"))
        aux4 = insFld(aux3, gFld("Place of worship", "c185.htm"))
  aux1 = insFld(foldersTree, gFld("Daily life", "c186.htm"))
    aux2 = insFld(aux1, gFld("Food", "c187.htm"))
      aux3 = insFld(aux2, gFld("Food preparation", "c188.htm"))
        aux4 = insFld(aux3, gFld("Cooking utensil", "c189.htm"))
        aux4 = insFld(aux3, gFld("Food storage", "c190.htm"))
        aux4 = insFld(aux3, gFld("Serve food", "c191.htm"))
      aux3 = insFld(aux2, gFld("Eat", "c192.htm"))
        aux4 = insFld(aux3, gFld("Bite, chew", "c193.htm"))
        aux4 = insFld(aux3, gFld("Hungry, thirsty", "c194.htm"))
        aux4 = insFld(aux3, gFld("Satiated, full", "c195.htm"))
        aux4 = insFld(aux3, gFld("Drink", "c196.htm"))
        aux4 = insFld(aux3, gFld("Eating utensil", "c197.htm"))
      aux3 = insFld(aux2, gFld("Types of food", "c198.htm"))
        aux4 = insFld(aux3, gFld("Food from plants", "c199.htm"))
          aux5 = insFld(aux4, gFld("Food from fruit", "c200.htm"))
        aux4 = insFld(aux3, gFld("Food from animals", "c201.htm"))
          aux5 = insFld(aux4, gFld("Meat", "c202.htm"))
        aux4 = insFld(aux3, gFld("Cooking ingredients", "c203.htm"))
          aux5 = insFld(aux4, gFld("Spice", "c204.htm"))
        aux4 = insFld(aux3, gFld("Beverage", "c205.htm"))
        aux4 = insFld(aux3, gFld("Alcoholic beverage", "c206.htm"))
          aux5 = insFld(aux4, gFld("Drunk", "c207.htm"))
    aux2 = insFld(aux1, gFld("Clothing", "c208.htm"))
    aux2 = insFld(aux1, gFld("Adornment", "c209.htm"))
      aux3 = insFld(aux2, gFld("Jewelry", "c210.htm"))
    aux2 = insFld(aux1, gFld("Fire", "c211.htm"))
      aux3 = insFld(aux2, gFld("Burn", "c212.htm"))
    aux2 = insFld(aux1, gFld("Cleaning", "c213.htm"))
      aux3 = insFld(aux2, gFld("Clean, dirty", "c214.htm"))
      aux3 = insFld(aux2, gFld("Bathe", "c215.htm"))
    aux2 = insFld(aux1, gFld("Sleep", "c216.htm"))
      aux3 = insFld(aux2, gFld("Wake up", "c217.htm"))
    aux2 = insFld(aux1, gFld("Live, stay", "c218.htm"))
  aux1 = insFld(foldersTree, gFld("Work and occupation", "c219.htm"))
    aux2 = insFld(aux1, gFld("Work", "c220.htm"))
      aux3 = insFld(aux2, gFld("Difficult, impossible", "c221.htm"))
        aux4 = insFld(aux3, gFld("Easy, possible", "c222.htm"))
    aux2 = insFld(aux1, gFld("Agriculture", "c223.htm"))
      aux3 = insFld(aux2, gFld("Growing crops", "c224.htm"))
        aux4 = insFld(aux3, gFld("Growing grain", "c225.htm"))
          aux5 = insFld(aux4, gFld("Growing rice", "c226.htm"))
      aux3 = insFld(aux2, gFld("Process harvest", "c227.htm"))
      aux3 = insFld(aux2, gFld("Agricultural tool", "c228.htm"))
      aux3 = insFld(aux2, gFld("Farmland", "c229.htm"))
    aux2 = insFld(aux1, gFld("Hunt and fish", "c230.htm"))
      aux3 = insFld(aux2, gFld("Hunt", "c231.htm"))
      aux3 = insFld(aux2, gFld("Fishing", "c232.htm"))
    aux2 = insFld(aux1, gFld("Working with buildings", "c233.htm"))
      aux3 = insFld(aux2, gFld("Building", "c234.htm"))
        aux4 = insFld(aux3, gFld("House", "c235.htm"))
      aux3 = insFld(aux2, gFld("Parts of a building", "c236.htm"))
        aux4 = insFld(aux3, gFld("Roof", "c237.htm"))
        aux4 = insFld(aux3, gFld("Room", "c238.htm"))
        aux4 = insFld(aux3, gFld("Floor, story", "c239.htm"))
      aux3 = insFld(aux2, gFld("Infrastructure", "c240.htm"))
        aux4 = insFld(aux3, gFld("Road", "c241.htm"))
        aux4 = insFld(aux3, gFld("Boundary", "c242.htm"))
    aux2 = insFld(aux1, gFld("Occupation", "c243.htm"))
      aux3 = insFld(aux2, gFld("Working with cloth", "c244.htm"))
        aux4 = insFld(aux3, gFld("Cloth", "c245.htm"))
      aux3 = insFld(aux2, gFld("Art", "c246.htm"))
    aux2 = insFld(aux1, gFld("Tool", "c247.htm"))
      aux3 = insFld(aux2, gFld("Cutting tool", "c248.htm"))
      aux3 = insFld(aux2, gFld("Container", "c249.htm"))
        aux4 = insFld(aux3, gFld("Bag", "c250.htm"))
    aux2 = insFld(aux1, gFld("Finance", "c251.htm"))
      aux3 = insFld(aux2, gFld("Share wealth", "c252.htm"))
        aux4 = insFld(aux3, gFld("Beg", "c253.htm"))
      aux3 = insFld(aux2, gFld("Financial transaction", "c254.htm"))
        aux4 = insFld(aux3, gFld("Buy", "c255.htm"))
        aux4 = insFld(aux3, gFld("Store, marketplace", "c256.htm"))
      aux3 = insFld(aux2, gFld("Money", "c257.htm"))
      aux3 = insFld(aux2, gFld("Dishonest financial practices", "c258.htm"))
  aux1 = insFld(foldersTree, gFld("Physical actions", "c259.htm"))
    aux2 = insFld(aux1, gFld("Posture", "c260.htm"))
      aux3 = insFld(aux2, gFld("Stand", "c261.htm"))
      aux3 = insFld(aux2, gFld("Sit", "c262.htm"))
      aux3 = insFld(aux2, gFld("Straight posture", "c263.htm"))
    aux2 = insFld(aux1, gFld("Move", "c264.htm"))
      aux3 = insFld(aux2, gFld("Manner of movement", "c265.htm"))
        aux4 = insFld(aux3, gFld("Walk", "c266.htm"))
          aux5 = insFld(aux4, gFld("Run", "c267.htm"))
      aux3 = insFld(aux2, gFld("Move in a direction", "c268.htm"))
        aux4 = insFld(aux3, gFld("Move back", "c269.htm"))
        aux4 = insFld(aux3, gFld("Move up", "c270.htm"))
        aux4 = insFld(aux3, gFld("Move down", "c271.htm"))
          aux5 = insFld(aux4, gFld("Fall", "c272.htm"))
        aux4 = insFld(aux3, gFld("Move in a circle", "c273.htm"))
      aux3 = insFld(aux2, gFld("Move toward something", "c274.htm"))
        aux4 = insFld(aux3, gFld("Go", "c275.htm"))
          aux5 = insFld(aux4, gFld("Come", "c276.htm"))
        aux4 = insFld(aux3, gFld("Return", "c277.htm"))
      aux3 = insFld(aux2, gFld("Travel", "c278.htm"))
        aux4 = insFld(aux3, gFld("Travel by land", "c279.htm"))
          aux5 = insFld(aux4, gFld("Vehicle", "c280.htm"))
      aux3 = insFld(aux2, gFld("Not moving", "c281.htm"))
        aux4 = insFld(aux3, gFld("Wait", "c282.htm"))
    aux2 = insFld(aux1, gFld("Move something", "c283.htm"))
      aux3 = insFld(aux2, gFld("Move something in a direction", "c284.htm"))
        aux4 = insFld(aux3, gFld("Take something out of something", "c285.htm"))
      aux3 = insFld(aux2, gFld("Take somewhere", "c286.htm"))
        aux4 = insFld(aux3, gFld("Chase away", "c287.htm"))
        aux4 = insFld(aux3, gFld("Drive along", "c288.htm"))
      aux3 = insFld(aux2, gFld("Handle something", "c289.htm"))
        aux4 = insFld(aux3, gFld("Actions of the hand", "c290.htm"))
    aux2 = insFld(aux1, gFld("Have, be with", "c291.htm"))
      aux3 = insFld(aux2, gFld("Give, hand to", "c292.htm"))
      aux3 = insFld(aux2, gFld("Get", "c293.htm"))
      aux3 = insFld(aux2, gFld("Keep something", "c294.htm"))
    aux2 = insFld(aux1, gFld("Arrange", "c295.htm"))
      aux3 = insFld(aux2, gFld("Gather", "c296.htm"))
        aux4 = insFld(aux3, gFld("Separate, scatter", "c297.htm"))
      aux3 = insFld(aux2, gFld("Tie", "c298.htm"))
      aux3 = insFld(aux2, gFld("Simple, complicated", "c299.htm"))
      aux3 = insFld(aux2, gFld("Put", "c300.htm"))
    aux2 = insFld(aux1, gFld("Physical impact", "c301.htm"))
      aux3 = insFld(aux2, gFld("Hit", "c302.htm"))
    aux2 = insFld(aux1, gFld("Divide into pieces", "c303.htm"))
      aux3 = insFld(aux2, gFld("Cut", "c304.htm"))
      aux3 = insFld(aux2, gFld("Make hole, opening", "c305.htm"))
  aux1 = insFld(foldersTree, gFld("States", "c306.htm"))
    aux2 = insFld(aux1, gFld("Quantity", "c307.htm"))
      aux3 = insFld(aux2, gFld("Number", "c308.htm"))
        aux4 = insFld(aux3, gFld("Cardinal numbers", "c309.htm"))
          aux5 = insFld(aux4, gFld("One", "c310.htm"))
          aux5 = insFld(aux4, gFld("Two", "c311.htm"))
        aux4 = insFld(aux3, gFld("Numbered group", "c312.htm"))
        aux4 = insFld(aux3, gFld("Fraction", "c313.htm"))
        aux4 = insFld(aux3, gFld("Number series", "c314.htm"))
      aux3 = insFld(aux2, gFld("Plural", "c315.htm"))
        aux4 = insFld(aux3, gFld("Many, much", "c316.htm"))
      aux3 = insFld(aux2, gFld("More", "c317.htm"))
      aux3 = insFld(aux2, gFld("All", "c318.htm"))
      aux3 = insFld(aux2, gFld("Whole, complete", "c319.htm"))
    aux2 = insFld(aux1, gFld("Big", "c320.htm"))
      aux3 = insFld(aux2, gFld("Long", "c321.htm"))
        aux4 = insFld(aux3, gFld("Short, not tall", "c322.htm"))
      aux3 = insFld(aux2, gFld("Distance", "c323.htm"))
        aux4 = insFld(aux3, gFld("Far", "c324.htm"))
        aux4 = insFld(aux3, gFld("Near", "c325.htm"))
      aux3 = insFld(aux2, gFld("Weigh", "c326.htm"))
        aux4 = insFld(aux3, gFld("Heavy", "c327.htm"))
        aux4 = insFld(aux3, gFld("Light in weight", "c328.htm"))
    aux2 = insFld(aux1, gFld("Quality", "c329.htm"))
      aux3 = insFld(aux2, gFld("Shape", "c330.htm"))
        aux4 = insFld(aux3, gFld("Straight", "c331.htm"))
        aux4 = insFld(aux3, gFld("Bend", "c332.htm"))
      aux3 = insFld(aux2, gFld("Texture", "c333.htm"))
        aux4 = insFld(aux3, gFld("Sharp", "c334.htm"))
        aux4 = insFld(aux3, gFld("Blunt", "c335.htm"))
      aux3 = insFld(aux2, gFld("Light", "c336.htm"))
        aux4 = insFld(aux3, gFld("Color", "c337.htm"))
          aux5 = insFld(aux4, gFld("White", "c338.htm"))
          aux5 = insFld(aux4, gFld("Black", "c339.htm"))
      aux3 = insFld(aux2, gFld("Hot", "c340.htm"))
        aux4 = insFld(aux3, gFld("Cold", "c341.htm"))
      aux3 = insFld(aux2, gFld("Type, kind", "c342.htm"))
        aux4 = insFld(aux3, gFld("Compare", "c343.htm"))
          aux5 = insFld(aux4, gFld("Same", "c344.htm"))
          aux5 = insFld(aux4, gFld("Like, similar", "c345.htm"))
      aux3 = insFld(aux2, gFld("Good", "c346.htm"))
        aux4 = insFld(aux3, gFld("Bad", "c347.htm"))
        aux4 = insFld(aux3, gFld("Right, proper", "c348.htm"))
          aux5 = insFld(aux4, gFld("Wrong, unsuitable", "c349.htm"))
          aux5 = insFld(aux4, gFld("Compatible", "c350.htm"))
        aux4 = insFld(aux3, gFld("Decay", "c351.htm"))
    aux2 = insFld(aux1, gFld("Time", "c352.htm"))
      aux3 = insFld(aux2, gFld("Period of time", "c353.htm"))
        aux4 = insFld(aux3, gFld("Calendar", "c354.htm"))
        aux4 = insFld(aux3, gFld("Day", "c355.htm"))
          aux5 = insFld(aux4, gFld("Night", "c356.htm"))
          aux5 = insFld(aux4, gFld("Yesterday, today, tomorrow", "c357.htm"))
          aux5 = insFld(aux4, gFld("Time of the day", "c358.htm"))
        aux4 = insFld(aux3, gFld("Month", "c359.htm"))
          aux5 = insFld(aux4, gFld("Months of the year", "c360.htm"))
        aux4 = insFld(aux3, gFld("Year", "c361.htm"))
      aux3 = insFld(aux2, gFld("Indefinite time", "c362.htm"))
      aux3 = insFld(aux2, gFld("Telling time", "c363.htm"))
        aux4 = insFld(aux3, gFld("Clock, watch", "c364.htm"))
      aux3 = insFld(aux2, gFld("Relative time", "c365.htm"))
        aux4 = insFld(aux3, gFld("Before", "c366.htm"))
      aux3 = insFld(aux2, gFld("Aspectual time", "c367.htm"))
        aux4 = insFld(aux3, gFld("Past", "c368.htm"))
        aux4 = insFld(aux3, gFld("Present", "c369.htm"))
          aux5 = insFld(aux4, gFld("Now", "c370.htm"))
        aux4 = insFld(aux3, gFld("Future", "c371.htm"))
          aux5 = insFld(aux4, gFld("Not yet", "c372.htm"))
        aux4 = insFld(aux3, gFld("Age", "c373.htm"))
          aux5 = insFld(aux4, gFld("Old, not young", "c374.htm"))
          aux5 = insFld(aux4, gFld("New", "c375.htm"))
          aux5 = insFld(aux4, gFld("Old, not new", "c376.htm"))
        aux4 = insFld(aux3, gFld("Once", "c377.htm"))
          aux5 = insFld(aux4, gFld("Again", "c378.htm"))
    aux2 = insFld(aux1, gFld("Location", "c379.htm"))
      aux3 = insFld(aux2, gFld("Here, there", "c380.htm"))
        aux4 = insFld(aux3, gFld("Beside", "c381.htm"))
          aux5 = insFld(aux4, gFld("Around", "c382.htm"))
          aux5 = insFld(aux4, gFld("Between", "c383.htm"))
        aux4 = insFld(aux3, gFld("On", "c384.htm"))
          aux5 = insFld(aux4, gFld("Above", "c385.htm"))
        aux4 = insFld(aux3, gFld("Inside", "c386.htm"))
      aux3 = insFld(aux2, gFld("Direction", "c387.htm"))
        aux4 = insFld(aux3, gFld("Right, left", "c388.htm"))
        aux4 = insFld(aux3, gFld("Down", "c389.htm"))
      aux3 = insFld(aux2, gFld("Be at a place", "c390.htm"))
    aux2 = insFld(aux1, gFld("Parts of things", "c391.htm"))
      aux3 = insFld(aux2, gFld("Front", "c392.htm"))
        aux4 = insFld(aux3, gFld("Back", "c393.htm"))
      aux3 = insFld(aux2, gFld("Side", "c394.htm"))
  aux1 = insFld(foldersTree, gFld("Grammar", "c395.htm"))
    aux2 = insFld(aux1, gFld("General words", "c396.htm"))
      aux3 = insFld(aux2, gFld("Be", "c397.htm"))
      aux3 = insFld(aux2, gFld("Do", "c398.htm"))
        aux4 = insFld(aux3, gFld("Make", "c399.htm"))
    aux2 = insFld(aux1, gFld("Part of speech", "c400.htm"))
      aux3 = insFld(aux2, gFld("Pronouns", "c401.htm"))
        aux4 = insFld(aux3, gFld("Question words", "c402.htm"))
      aux3 = insFld(aux2, gFld("Prepositions, postpositions", "c403.htm"))
      aux3 = insFld(aux2, gFld("Particles", "c404.htm"))
        aux4 = insFld(aux3, gFld("Classifiers", "c405.htm"))
      aux3 = insFld(aux2, gFld("Affixes", "c406.htm"))
        aux4 = insFld(aux3, gFld("Verb affixes", "c407.htm"))
        aux4 = insFld(aux3, gFld("Noun affixes", "c408.htm"))
    aux2 = insFld(aux1, gFld("Semantic constituents related to verbs", "c409.htm"))
      aux3 = insFld(aux2, gFld("Tense and aspect", "c410.htm"))
        aux4 = insFld(aux3, gFld("Tense", "c411.htm"))
      aux3 = insFld(aux2, gFld("Moods", "c412.htm"))
      aux3 = insFld(aux2, gFld("Epistemic moods", "c413.htm"))
        aux4 = insFld(aux3, gFld("Sure", "c414.htm"))
        aux4 = insFld(aux3, gFld("Probably", "c415.htm"))
      aux3 = insFld(aux2, gFld("Yes", "c416.htm"))
        aux4 = insFld(aux3, gFld("No, not", "c417.htm"))
    aux2 = insFld(aux1, gFld("Case", "c418.htm"))
      aux3 = insFld(aux2, gFld("Primary cases", "c419.htm"))
        aux4 = insFld(aux3, gFld("Spatial location of an event", "c420.htm"))
          aux5 = insFld(aux4, gFld("Origin (of a person)", "c421.htm"))
      aux3 = insFld(aux2, gFld("Semantically similar events", "c422.htm"))
        aux4 = insFld(aux3, gFld("Together", "c423.htm"))
        aux4 = insFld(aux3, gFld("With, be with", "c424.htm"))
    aux2 = insFld(aux1, gFld("Connected with, related", "c425.htm"))
      aux3 = insFld(aux2, gFld("Dependency relations", "c426.htm"))
        aux4 = insFld(aux3, gFld("Condition", "c427.htm"))
      aux3 = insFld(aux2, gFld("Discourse markers", "c428.htm"))
    aux2 = insFld(aux1, gFld("Name", "c429.htm"))
