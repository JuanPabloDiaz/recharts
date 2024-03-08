"use client";

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // *****************       AREA        *****************

  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/area")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data Area: ", json); // Log the data
        setDataArea(json); // Add the data to the state (setItems)
        setIsLoading(false); // Set isLoading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Set isLoading to false even if there was an error
      });
  }, []);

  // *****************       BAR        *****************

  const [dataBar, setDataBar] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/bar")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data Bar: ", json);
        setDataBar(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       COMPOSED        *****************

  const [dataComposed, setDataComposed] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/composed")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data Composed: ", json);
        setDataComposed(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       FUNNEL        *****************

  const [dataFunnel, setDataFunnel] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/funnel")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data Funnel: ", json);
        // console.log("Funnel: ", json.funnel);
        setDataFunnel(json.funnel);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       LINE        *****************

  const [dataLine, setDataLine] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/line")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data Line: ", json);
        setDataFunnel(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        dataArea,
        setDataArea,
        dataBar,
        setDataBar,
        dataComposed,
        setDataComposed,
        dataFunnel,
        setDataFunnel,
        dataLine,
        setDataLine,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
