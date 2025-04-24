import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import CustomDropdown from "../../components/dropdown";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { db } from "@/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import DropDownPicker from "react-native-dropdown-picker";

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
    if (valueSubject.value === "mathematics") {
      setitemsBranch([
        { label: "Algebra", value: "algebra" },
        { label: "Geometry", value: "geometria" },
        { label: "Calculus", value: "calculo" },
        { label: "Statistics", value: "estadistica" },
        { label: "Trigonometry", value: "trigonometria" },
        { label: "Arithmetic", value: "aritmetica" },
      ]);
    } else if (valueSubject.value === "sciences") {
      setitemsBranch([
        { label: "Biology", value: "biologia" },
        { label: "Chemistry", value: "quimica" },
        { label: "Physics", value: "fisica" },
        { label: "Geology", value: "geologia" },
        { label: "Astronomy", value: "astronomia" },
        { label: "Anatomy", value: "anatomia" },
        { label: "Physiology", value: "fisiologia" },

        { label: "Neuroscience", value: "neurociencia" },
        { label: "Geography", value: "geografia" },
      ]);
    } else if (valueSubject.value === "engineering") {
      setitemsBranch([
        { label: "Civil Engineering", value: "ingenieria_civil" },
        { label: "Electronic Engineering", value: "ingenieria_electronica" },
        { label: "Mechanical Engineering", value: "ingenieria_mecanica" },
        { label: "Software Engineering", value: "ingenieria_software" },
        { label: "Industrial Engineering", value: "ingenieria_industrial" },
        { label: "Chemical Engineering", value: "ingenieria_quimica" },
      ]);
    } else if (valueSubject.value === "history") {
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
    } else if (valueSubject.value === "psychology") {
      setitemsBranch([
        { label: "Cognitive Psychology", value: "psicologia_cognitiva" },
        { label: "Social Psychology", value: "psicologia_social" },
        { label: "Clinical Psychology", value: "psicologia_clinica" },
        { label: "Educational Psychology", value: "psicologia_educativa" },
        { label: "Neuropsychology", value: "neuropsicologia" },
        { label: "Psychometrics", value: "psicometria" },
      ]);
    } else if (valueSubject.value === "philosophy") {
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
    } else if (valueSubject.value === "art") {
      setitemsBranch([
        { label: "Painting", value: "pintura" },
        { label: "Sculpture", value: "escultura" },
        { label: "Photography", value: "fotografia" },
        { label: "Graphic Design", value: "diseno_grafico" },
        { label: "Architecture", value: "arquitectura" },
        { label: "Plastic Arts", value: "artes_plasticas" },
        { label: "Design", value: "diseno" },
      ]);
    } else if (valueSubject.value === "music") {
      setitemsBranch([
        { label: "Music Theory", value: "teoria_musical" },
        { label: "Composition", value: "composicion" },
        { label: "Music Production", value: "produccion_musical" },
        { label: "Acoustics", value: "acustica" },
      ]);
    } else if (valueSubject.value === "cinema") {
      setitemsBranch([
        { label: "Directing", value: "direccion" },
        { label: "Production", value: "produccion" },
        { label: "Screenwriting", value: "guionismo" },
        { label: "Editing", value: "edicion" },
        { label: "Animation", value: "animacion" },
        { label: "Special Effects", value: "efectos_especiales" },
      ]);
    } else if (valueSubject.value === "programming") {
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
    } else if (valueSubject.value === "blockchain") {
      setitemsBranch([
        {
          label: "Smart Contracts Development",
          value: "desarrollo_smart_contracts",
        },
        { label: "Cryptos", value: "criptomonedas" },
        { label: "NFTs", value: "nfts" },
      ]);
    } else if (valueSubject.value === "entrepreneurship") {
      setitemsBranch([
        { label: "Business Plan", value: "plan_negocios" },
        { label: "Digital Marketing", value: "marketing_digital" },
        {
          label: "Finance for Entrepreneurs",
          value: "finanzas_emprendedores",
        },
        { label: "Startups", value: "startups" },
      ]);
    } else if (valueSubject.value === "economics") {
      setitemsBranch([
        { label: "Microeconomics", value: "microeconomia" },
        { label: "Macroeconomics", value: "macroeconomia" },
        { label: "International Economics", value: "economia_internacional" },
        { label: "Political Economy", value: "economia_politica" },
      ]);
    } else if (valueSubject.value === "languages") {
      setitemsBranch([
        { label: "Dialect", value: "dialecto" },
        { label: "Grammar", value: "gramatica" },
        { label: "Linguistics", value: "linguistica" },
        { label: "Translation", value: "traduccion" },
        { label: "Interpretation", value: "interpretacion" },
      ]);
    } else if (valueSubject.value === "sports") {
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
  const [itemsFocus, setItemsFocus] = useState([]);
  useEffect(() => {
    if (!valueBranch) return;
    if (valueBranch.value === "algebra") {
      setItemsFocus([
        { label: "Linear Algebra", value: "algebra_lineal" },
        { label: "Abstract Algebra", value: "algebra_abstracta" },
        { label: "Boolean Algebra", value: "algebra_booleana" },
        { label: "Matrix Algebra", value: "algebra_matrices" },
      ]);
    } else if (valueBranch.value === "geometria") {
      setItemsFocus([
        { label: "Analytic Geometry", value: "geometria_analitica" },
        { label: "Differential Geometry", value: "geometria_diferencial" },
        { label: "Projective Geometry", value: "geometria_proyectiva" },
        { label: "Topology", value: "topologia" },
      ]);
    } else if (valueBranch.value === "calculo") {
      setItemsFocus([
        { label: "Differential Calculus", value: "calculo_diferencial" },
        { label: "Integral Calculus", value: "calculo_integral" },
        { label: "Multivariable Calculus", value: "calculo_multivariable" },
        { label: "Vector Calculus", value: "calculo_vectorial" },
      ]);
    } else if (valueBranch.value === "estadistica") {
      setItemsFocus([
        { label: "Descriptive Statistics", value: "estadistica_descriptiva" },
        { label: "Inferential Statistics", value: "estadistica_inferencial" },
        { label: "Bayesian Statistics", value: "estadistica_bayesiana" },
      ]);
    } else if (valueBranch.value === "trigonometria") {
      setItemsFocus([
        {
          label: "Trigonometric Functions",
          value: "funciones_trigonometricas",
        },
        {
          label: "Inverse Trigonometric Functions",
          value: "funciones_inversas",
        },
        {
          label: "Trigonometric Identities",
          value: "identidades_trigonometricas",
        },
        {
          label: "Applications of Trigonometry",
          value: "aplicaciones_trigonometria",
        },
      ]);
    } else if (valueBranch.value === "aritmetica") {
      setItemsFocus([
        { label: "Basic Arithmetic", value: "aritmetica_basica" },
        { label: "Advanced Arithmetic", value: "aritmetica_avanzada" },
        { label: "Arithmetic Operations", value: "operaciones_aritmeticas" },
        {
          label: "Applications of Arithmetic",
          value: "aplicaciones_aritmetica",
        },
      ]);
    } else if (valueBranch.value === "biologia") {
      setItemsFocus([
        { label: "Cell Biology", value: "biologia_celular" },
        { label: "Molecular Biology", value: "biologia_molecular" },
        { label: "Genetics", value: "genetica" },
        { label: "Evolutionary Biology", value: "biologia_evolutiva" },
        { label: "Ecology", value: "ecologia" },
        { label: "Microbiology", value: "microbiologia" },
        { label: "Biotechnology", value: "biotecnologia" },
      ]);
    } else if (valueBranch.value === "quimica") {
      setItemsFocus([
        { label: "Organic Chemistry", value: "quimica_organica" },
        { label: "Inorganic Chemistry", value: "quimica_inorganica" },
        { label: "Biochemistry", value: "bioquimica" },
        { label: "Industrial Chemistry", value: "quimica_industrial" },
        { label: "Pharmaceutical Chemistry", value: "quimica_farmaceutica" },
      ]);
    } else if (valueBranch.value === "fisica") {
      setItemsFocus([
        { label: "Classical Mechanics", value: "mecanica_clasica" },
        { label: "Thermodynamics", value: "termodinamica" },
        { label: "Electromagnetism", value: "electromagnetismo" },
        { label: "Quantum Mechanics", value: "mecanica_cuantica" },
        { label: "Relativity", value: "relatividad" },
      ]);
    } else if (valueBranch.value === "geologia") {
      setItemsFocus([
        { label: "Mineralogy", value: "mineralogia" },
        { label: "Petrology", value: "petrologia" },
        { label: "Paleontology", value: "paleontologia" },
        { label: "Geophysics", value: "geofisica" },
        { label: "Stratigraphy", value: "estratigrafia" },
      ]);
    } else if (valueBranch.value === "astronomia") {
      setItemsFocus([
        { label: "Astrophysics", value: "astrofisica" },
        { label: "Cosmology", value: "cosmologia" },
        { label: "Planetary Science", value: "ciencia_planetaria" },
        { label: "Stellar Astronomy", value: "astronomia_estelar" },
        { label: "Galactic Astronomy", value: "astronomia_galactica" },
      ]);
    } else if (valueBranch.value === "anatomia") {
      setItemsFocus([
        { label: "Human Anatomy", value: "anatomia_humana" },
        { label: "Comparative Anatomy", value: "anatomia_comparada" },
        { label: "Neuroanatomy", value: "neuroanatomia" },
        { label: "Gross Anatomy", value: "anatomia_macroscópica" },
        { label: "Microscopic Anatomy", value: "anatomia_microscopica" },
      ]);
    } else if (valueBranch.value === "fisiologia") {
      setItemsFocus([
        { label: "Human Physiology", value: "fisiologia_humana" },
        { label: "Plant Physiology", value: "fisiologia_vegetal" },
        { label: "Neurophysiology", value: "neurofisiologia" },
        { label: "Endocrinology", value: "endocrinologia" },
        {
          label: "Cardiovascular Physiology",
          value: "fisiologia_cardiovascular",
        },
      ]);
    } else if (valueBranch.value === "neurociencia") {
      setItemsFocus([
        { label: "Cognitive Neuroscience", value: "neurociencia_cognitiva" },
        { label: "Clinical Neuroscience", value: "neurociencia_clinica" },
        { label: "Neurobiology", value: "neurobiologia" },
        { label: "Neurophysiology", value: "neurofisiologia" },
        { label: "Neurochemistry", value: "neuroquimica" },
      ]);
    } else if (valueBranch.value === "geografia") {
      setItemsFocus([
        { label: "Physical Geography", value: "geografia_fisica" },
        { label: "Human Geography", value: "geografia_humana" },
        {
          label: "Geographical Information Systems (GIS)",
          value: "sistemas_de_informacion_geografica",
        },
        { label: "Climatology", value: "climatologia" },
        { label: "Cartography", value: "cartografia" },
      ]);
    }
  }, [valueBranch]);
  const handleBoarding = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        console.error("No user is currently signed in.");
        return;
      }
      const userId = user.uid;
      await setDoc(
        doc(db, "usuarios", userId),
        {
          education: valueEducation.label,
          subject: valueSubject.label,
          branch: valueBranch.label,
          focus: valueFocus.label,
        },
        { merge: true }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the App</Text>
        <View style={styles.formBox}>
          <View
            style={[
              styles.inputWithIcon,
              {
                zIndex: 10,
                position: "relative",
                ...Platform.select({ android: { padding: 14 } }),
              },
            ]}
          >
            <Ionicons
              name="school-outline"
              style={styles.icon}
              size={24}
              color="gray"
            />
            <DropDownPicker
              placeholder="Education Level"
              placeholderStyle={{ color: "#fff" }}
              open={openEducation}
              setOpen={setOpenEducation}
              value={valueEducation}
              setValue={setValueEducation}
              items={itemsEducation}
              setItems={setItemsEducation}
              arrowIconStyle={{ color: "#fff" }}
              listMode="FLATLIST"
              style={styles.picker}
              dropDownContainerStyle={styles.pickerContainer}
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
          </View>
          <TouchableOpacity style={styles.button} onPress={handleBoarding}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
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
    height: "auto",
    justifyContent: "space-between",
  },
  inputWithIcon: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },

  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    cursor: "pointer",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "transparent",
    width: "95%",
  },
});

export default OnBoardingScreen;
