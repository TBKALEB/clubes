import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Platform } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import CustomDropdown from "../../components/dropdown";

const OnBoardingScreen = () => {
  const [openEducation, setOpenEducation] = useState(false);
  const [valueEducation, setValueEducation] = useState(null);
  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState(null);
  const [openBranch, setOpenBranch] = useState(false);
  const [valueBranch, setValueBranch] = useState(null);
  const [openFocus, setOpenFocus] = useState(false);
  const [valueFocus, setValueFocus] = useState(null);
  const [itemsEducation, setItemsEducation] = useState([
    { label: "Elementary School", value: "elementary" },
    { label: "Middle School", value: "middle" },
    { label: "High School", value: "high" },
    { label: "University", value: "university" },
  ]);
  const [itemsSubject, setItemsSubject] = useState([
    { label: "Mathematics", value: "mathematics" },
    { label: "Sciences", value: "sciences" },
    { label: "Engineering", value: "engineering" },
    { label: "History", value: "history" },
    { label: "Psychology", value: "psychology" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Art", value: "art" },
    { label: "Music", value: "music" },
    { label: "Cinema", value: "cinema" },
    { label: "Programming", value: "programming" },
    { label: "Blockchain", value: "blockchain" },
    { label: "Entrepreneurship", value: "entrepreneurship" },
    { label: "Economics", value: "economics" },
    { label: "Languages", value: "languages" },
    { label: "Sports", value: "sports" },
  ]);
  const [itemsBranch, setitemsBranch] = useState([]);
  useEffect(() => {
    if (!valueSubject) return;
    if (valueSubject === "mathematics") {
      setitemsBranch([
        { label: "Algebra", value: "algebra" },
        { label: "Geometry", value: "geometria" },
        { label: "Calculus", value: "calculo" },
        { label: "Statistics", value: "estadistica" },
        { label: "Trigonometry", value: "trigonometria" },
        { label: "Arithmetic", value: "aritmetica" },
      ]);
    } else if (valueSubject === "sciences") {
      setitemsBranch([
        { label: "Biology", value: "biologia" },
        { label: "Chemistry", value: "quimica" },
        { label: "Physics", value: "fisica" },
        { label: "Geology", value: "geologia" },
        { label: "Astronomy", value: "astronomia" },
        { label: "Ecology", value: "ecologia" },
        { label: "Botany", value: "botanica" },
        { label: "Zoology", value: "zoologia" },
        { label: "Genetics", value: "genetica" },
        { label: "Microbiology", value: "microbiologia" },
        { label: "Anatomy", value: "anatomia" },
        { label: "Physiology", value: "fisiologia" },
        { label: "Biochemistry", value: "bioquimica" },
        { label: "Biotechnology", value: "biotecnologia" },
        { label: "Neuroscience", value: "neurociencia" },
        { label: "Geography", value: "geografia" },
      ]);
    } else if (valueSubject === "engineering") {
      setitemsBranch([
        { label: "Civil Engineering", value: "ingenieria_civil" },
        { label: "Electronic Engineering", value: "ingenieria_electronica" },
        { label: "Mechanical Engineering", value: "ingenieria_mecanica" },
        { label: "Software Engineering", value: "ingenieria_software" },
        { label: "Industrial Engineering", value: "ingenieria_industrial" },
        { label: "Chemical Engineering", value: "ingenieria_quimica" },
      ]);
    } else if (valueSubject === "history") {
      setitemsBranch([
        { label: "World History", value: "historia_universal" },
        { label: "American History", value: "historia_america" },
        { label: "European History", value: "historia_europa" },
        { label: "Asian History", value: "historia_asia" },
        { label: "African History", value: "historia_africa" },
        { label: "Art History", value: "historia_arte" },
        { label: "Contemporary History", value: "historia_contemporanea" },
        { label: "Political History", value: "historia_politica" },
      ]);
    } else if (valueSubject === "psychology") {
      setitemsBranch([
        { label: "Cognitive Psychology", value: "psicologia_cognitiva" },
        { label: "Social Psychology", value: "psicologia_social" },
        { label: "Clinical Psychology", value: "psicologia_clinica" },
        { label: "Educational Psychology", value: "psicologia_educativa" },
        { label: "Neuropsychology", value: "neuropsicologia" },
        { label: "Psychometrics", value: "psicometria" },
      ]);
    } else if (valueSubject === "philosophy") {
      setitemsBranch([
        { label: "Ancient Philosophy", value: "filosofia_antigua" },
        { label: "Medieval Philosophy", value: "filosofia_medieval" },
        { label: "Modern Philosophy", value: "filosofia_moderna" },
        { label: "Contemporary Philosophy", value: "filosofia_contemporanea" },
        { label: "Ethics", value: "etica" },
        { label: "Metaphysics", value: "metafisica" },
        { label: "Epistemology", value: "epistemologia" },
        { label: "Political Philosophy", value: "filosofia_politica" },
      ]);
    } else if (valueSubject === "art") {
      setitemsBranch([
        { label: "Painting", value: "pintura" },
        { label: "Sculpture", value: "escultura" },
        { label: "Photography", value: "fotografia" },
        { label: "Graphic Design", value: "diseno_grafico" },
        { label: "Architecture", value: "arquitectura" },
        { label: "Plastic Arts", value: "artes_plasticas" },
        { label: "Design", value: "diseno" },
      ]);
    } else if (valueSubject === "music") {
      setitemsBranch([
        { label: "Music Theory", value: "teoria_musical" },
        { label: "Composition", value: "composicion" },
        { label: "Music Production", value: "produccion_musical" },
        { label: "Acoustics", value: "acustica" },
      ]);
    } else if (valueSubject === "cinema") {
      setitemsBranch([
        { label: "Directing", value: "direccion" },
        { label: "Production", value: "produccion" },
        { label: "Screenwriting", value: "guionismo" },
        { label: "Editing", value: "edicion" },
        { label: "Animation", value: "animacion" },
        { label: "Special Effects", value: "efectos_especiales" },
      ]);
    } else if (valueSubject === "programming") {
      setitemsBranch([
        { label: "Web Development", value: "desarrollo_web" },
        { label: "Mobile Development", value: "desarrollo_movil" },
        { label: "Artificial Intelligence", value: "inteligencia_artificial" },
        { label: "Data Science", value: "ciencia_datos" },
        { label: "Game Development", value: "desarrollo_juegos" },
        { label: "Cybersecurity", value: "ciberseguridad" },
        { label: "UX/UI Design", value: "ux_ui_design" },
        { label: "Cloud Computing", value: "cloud_computing" },
        { label: "Networks and Systems", value: "redes_sistemas" },
        { label: "Backend Development", value: "backend_development" },
        { label: "Frontend Development", value: "frontend_development" },
        { label: "Robotics", value: "robotica" },
        { label: "Augmented Reality", value: "realidad_aumentada" },
        { label: "Virtual Reality", value: "realidad_virtual" },
      ]);
    } else if (valueSubject === "blockchain") {
      setitemsBranch([
        {
          label: "Smart Contracts Development",
          value: "desarrollo_smart_contracts",
        },
        { label: "Cryptos", value: "criptomonedas" },
        { label: "NFTs", value: "nfts" },
      ]);
    } else if (valueSubject === "entrepreneurship") {
      setitemsBranch([
        { label: "Business Plan", value: "plan_negocios" },
        { label: "Digital Marketing", value: "marketing_digital" },
        {
          label: "Finance for Entrepreneurs",
          value: "finanzas_emprendedores",
        },
        { label: "Startups", value: "startups" },
      ]);
    } else if (valueSubject === "economics") {
      setitemsBranch([
        { label: "Microeconomics", value: "microeconomia" },
        { label: "Macroeconomics", value: "macroeconomia" },
        { label: "International Economics", value: "economia_internacional" },
        { label: "Political Economy", value: "economia_politica" },
      ]);
    } else if (valueSubject === "languages") {
      setitemsBranch([
        { label: "Dialect", value: "dialecto" },
        { label: "Grammar", value: "gramatica" },
        { label: "Linguistics", value: "linguistica" },
        { label: "Translation", value: "traduccion" },
        { label: "Interpretation", value: "interpretacion" },
      ]);
    } else if (valueSubject === "sports") {
      setitemsBranch([
        { label: "Team Sports", value: "deportes_equipo" },
        { label: "Individual Sports", value: "deportes_individuales" },
        { label: "Combat Sports", value: "deportes_combate" },
        { label: "Water Sports", value: "deportes_acuaticos" },
        { label: "Adventure Sports", value: "deportes_aventura" },
        { label: "Winter Sports", value: "deportes_invierno" },
        { label: "Motorsports", value: "deportes_motor" },
        { label: "Precision Sports", value: "deportes_precision" },
      ]);
    } else {
      setitemsBranch([]);
    }
  }, [valueSubject]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <View style={styles.formBox}>
        <View
          style={[
            styles.inputWithIcon,
            { zIndex: 10, ...Platform.select({ android: { padding: 14 } }) },
          ]}
        >
          <Ionicons
            name="school-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <DropDownPicker
            open={openEducation}
            value={valueEducation}
            items={itemsEducation}
            setOpen={setOpenEducation}
            setValue={setValueEducation}
            setItems={setItemsEducation}
            placeholder="Education Level"
            placeholderStyle={{ color: "#ffffff" }}
            style={{
              backgroundColor: "transparent",
              width: "95%",
              borderColor: "transparent",
              flex: 1,
            }}
            dropDownContainerStyle={{
              backgroundColor: "#000",
              borderColor: "#ccc",
              borderRadius: 8,
              borderTopColor: "transparent",
              width: "96%",
            }}
            textStyle={{ color: "#ffffff" }}
            arrowIconStyle={{
              tintColor: "#ffffff",
            }}
          />
        </View>
        <View
          style={[
            styles.inputWithIcon,
            { zIndex: 9, ...Platform.select({ android: { padding: 14 } }) },
          ]}
        >
          <Ionicons
            name="book-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <DropDownPicker
            placeholder="Subject"
            open={openSubject}
            value={valueSubject}
            items={itemsSubject}
            setOpen={setOpenSubject}
            setValue={setValueSubject}
            setItems={setItemsSubject}
            placeholderStyle={{
              color: "#fff",
              fontSize: 14,
              lineHeight: 25,
            }}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
            textStyle={{ color: "#ffffff" }}
            dropDownContainerStyle={{
              backgroundColor: "#000",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              borderTopWidth: 0,
              borderTopColor: "transparent",
              width: "60%",
              justifyContent: "center",
              padding: 20,
              elevation: 5,
            }}
            flatListStyle={{
              backgroundColor: "#000",
              maxHeight: 200,
            }}
            modalStyle={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
            itemTextStyle={{ color: "#ffffff", fontSize: 14 }}
            containerStyle={{
              backgroundColor: "transparent",
              width: "95%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              borderColor: "transparent",
              flatListCOntentStyle: {},
              alignSelf: "center",
              ...Platform.select({
                android: { height: 20, paddingVertical: 12 },
              }),
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              borderRadius: 8,
              width: "100%",
              height: 50,
              borderColor: "transparent",
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingVertical: 12,
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          />
        </View>
        <View
          style={[
            styles.inputWithIcon,
            { zIndex: 8, ...Platform.select({ android: { padding: 14 } }) },
          ]}
        >
          <Ionicons
            name="extension-puzzle-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <DropDownPicker
            placeholder="Branch"
            open={openBranch}
            value={valueBranch}
            items={itemsBranch}
            setOpen={setOpenBranch}
            setValue={setValueBranch}
            setItems={setitemsBranch}
            placeholderStyle={{ color: "#ffffff" }}
            style={{
              backgroundColor: "transparent",
              width: "95%",
              borderColor: "transparent",
              flex: 1,
            }}
            dropDownContainerStyle={{
              backgroundColor: "#000",
              borderColor: "#ccc",
              borderRadius: 8,
              borderTopColor: "transparent",
              width: "96%",
            }}
            textStyle={{ color: "#ffffff" }}
            arrowIconStyle={{
              tintColor: "#ffffff",
            }}
          />
        </View>
        <View
          style={[
            styles.inputWithIcon,
            { zIndex: 7, ...Platform.select({ android: { padding: 14 } }) },
          ]}
        >
          <Ionicons
            name="search-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <DropDownPicker
            placeholder="Focus"
            open={openFocus}
            value={valueFocus}
            items={itemsBranch}
            setOpen={setOpenFocus}
            setValue={setValueFocus}
            setItems={setitemsBranch}
            placeholderStyle={{ color: "#ffffff" }}
            style={{
              backgroundColor: "transparent",
              width: "95%",
              borderColor: "transparent",
              flex: 1,
            }}
            dropDownContainerStyle={{
              backgroundColor: "#000",
              borderColor: "#ccc",
              borderRadius: 8,
              borderTopColor: "transparent",
              width: "96%",
            }}
            textStyle={{ color: "#ffffff" }}
            arrowIconStyle={{
              tintColor: "#ffffff",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#fff",
  },
  formBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    outlineStyle: "none",
    padding: 14,
    color: "#ffffff",
  },
});

export default OnBoardingScreen;
