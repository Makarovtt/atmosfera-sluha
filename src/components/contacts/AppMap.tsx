import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from "@pbe/react-yandex-maps";

interface Ikarta {
	center: Array<Number>;
	geometry: Array<Number>;
}

export function AppMap({ steckCurrentCity, height = "500px" }: any) {
	let centerMap = steckCurrentCity.center;
	let geometryMap = steckCurrentCity.geometry;

	return (
		<>
			<YMaps>
				<Map
					defaultState={{
						center: centerMap,
						type: "yandex#map",
						zoom: 16,
					}}
					state={{
						center: centerMap,
						type: "yandex#map",
						zoom: 16,
					}}
					height={height}
					width={"100%"}
				>
					<Placemark
						properties={{
							iconContent: "",
							balloonContentHeader: "iuhuihi",
							balloonContent: "SDFD",
							iconCaption: "«Атмосфера Слуха»",
						}}
						options={{
							iconColor: "#49c4e4",
						}}
						geometry={geometryMap}
					/>
					<FullscreenControl />
					{/* <ZoomControl options={{ float: "right" }} /> */}
				</Map>
			</YMaps>

			<style jsx>{``}</style>
		</>
	);
}
