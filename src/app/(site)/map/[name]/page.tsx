import { getFakeData } from "../../../../../utils/getFakeData";
import type { Map } from "../page";

export default function Map({ params }: { params: { name: string } }) {

    const maps: Map[] = getFakeData("maps.json");

    const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

    const map = maps.find(map => map.name.toLowerCase() === decodedParamsName || null);
    return map ? (
        <div>
            <p>name: {map.name}</p>
            <p>Type d'Habitat: {map.type}</p>
        </div>
    ) : ((<p>Cette map n'existe pas.</p>));
}

