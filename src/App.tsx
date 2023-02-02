import React, { useEffect, useState } from "react";
import "./App.css";
import PlantationProject from "./components/PlantationProject";
import TextInput from "./components/TextInput";
import { calculateDistance } from "./helpers/calculateDistance";
import useDebounce from "./hooks/useDebounce";
import CUSTOMER_LOCATIONS from "./constants/customerLocations.json";
import PLANTATION_PROJECTS from "./constants/plantationProjects.json";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const [currentLocation, setCurrentLocation] = useState<ICustomerLocation>();
  const [sortedProjects, setSortedProjects] = useState<IPlantationProject[]>(
    []
  );

  useEffect(() => {
    const customerLocation = CUSTOMER_LOCATIONS.find((location) =>
      location.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
    );
    if (!!debouncedSearchText && customerLocation) {
      setCurrentLocation(customerLocation);
      const projects = PLANTATION_PROJECTS.sort((first, second) => {
        const firstDistance = calculateDistance(
          customerLocation?.latitude,
          customerLocation?.longitude,
          Number(first.latitude),
          Number(first.longitude)
        );
        const secondDistance = calculateDistance(
          customerLocation?.latitude,
          customerLocation?.longitude,
          Number(second.latitude),
          Number(second.longitude)
        );
        if (firstDistance > secondDistance) return 1;
        return -1;
      });
      setSortedProjects([...projects]);
    } else {
      setCurrentLocation(undefined);
      setSortedProjects([]);
    }
  }, [debouncedSearchText]);

  return (
    <div className="pt-10 flex flex-col justify-center mx-auto w-fit">
      <span className="text-2xl font-bold">Plated Coding Challenge</span>
      <TextInput
        value={searchText}
        onChangeValue={setSearchText}
        className="mt-4"
        heading={<MagnifyingGlassIcon width={20} height={20} />}
      />

      {currentLocation ? (
        <span className="mt-4 text-lg font-semibold">
          {currentLocation.name}
        </span>
      ) : (
        <span className="mt-4 text-lg font-semibold">No Location Found</span>
      )}

      {sortedProjects.length && currentLocation
        ? Array(3)
            .fill(0)
            .map((_, index) => (
              <PlantationProject
                key={sortedProjects[index].id}
                name={sortedProjects[index].projectName}
                distance={calculateDistance(
                  currentLocation?.latitude,
                  currentLocation?.longitude,
                  Number(sortedProjects[index].latitude),
                  Number(sortedProjects[index].longitude)
                )}
              />
            ))
        : null}
    </div>
  );
}

export default App;
