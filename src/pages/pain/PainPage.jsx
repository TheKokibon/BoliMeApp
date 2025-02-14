import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TwoDModel, PainInfo } from "../../modules";
import React, { useState } from "react";
import { usePainForm } from "../../hooks/usePainForm";

const PainPage = () => {
  const [activeSegment, setActiveSegment] = useState("place");
  const {
    formik,
    modal,
    handleAddDosage,
    handleRemoveDosage,
    handleOpenModal,
  } = usePainForm();

  const renderPainForm = () => {
    if (activeSegment === "place") {
      return <TwoDModel formik={formik} setActiveSegment={setActiveSegment} />;
    } else if (activeSegment === "info") {
      return (
        <PainInfo
          formik={formik}
          modal={modal}
          handleAddDosage={handleAddDosage}
          handleRemoveDosage={handleRemoveDosage}
          handleOpenModal={handleOpenModal}
          setActiveSegment={setActiveSegment}
        />
      );
    }
    // Add more conditions for other segments as needed
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dodaj novi bol</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment
          value={activeSegment}
          onIonChange={(e) => setActiveSegment(e.detail.value)}
        >
          <IonSegmentButton value="place">
            <IonLabel>Mesto bola</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="info">
            <IonLabel>Način bola</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {renderPainForm()}
      </IonContent>
    </IonPage>
  );
};

export default PainPage;
