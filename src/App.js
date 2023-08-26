import "./App.css";
import { Route, Routes } from "react-router-dom";
import Barras from "./charts/barras/Barra-basica";
import BarrasDoble from "./charts/barras/Barra-doble";
import BarrasRango from "./charts/barras/Barra-rango";
import ComboLineaColumna from "./charts/combos/Linea-columna";
import MultipleYAxis from "./charts/combos/Multiple-y-Axis";
import Clandestick from "./charts/clandestick/Clandestick";
import ClandestickInfo from "./charts/clandestick/ClandesticInfo";
import DonutSimple from "./charts/donuts/Donut-simple";
import DonutBotones from "./charts/donuts/Donut-botones";
import RadarSimple from "./charts/radar/Radar-simple";
import RadarMultiple from "./charts/radar/Radar-multiple";

function App() {
  return (
    <Routes>
      <Route path="/barras" element={<Barras />} />
      <Route path="/barras-doble" element={<BarrasDoble />} />
      <Route path="/barras-rango" element={<BarrasRango />} />
      <Route path="/combo-linea-columna" element={<ComboLineaColumna />} />
      <Route path="/combo-multipleyaxis" element={<MultipleYAxis />} />
      <Route path="/clandestick" element={<Clandestick />} />
      <Route path="/clandestickinfo" element={<ClandestickInfo />} />
      <Route path="/donutsimple" element={<DonutSimple />} />
      <Route path="/donutbotones" element={<DonutBotones />} />
      <Route path="/radarsimple" element={<RadarSimple />} />
      <Route path="/radarmultiple" element={<RadarMultiple />} />
    </Routes>
  );
}

export default App;
