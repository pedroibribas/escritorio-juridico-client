import { useEffect, useState } from "react";
import { ParticipantDisplay } from "..";
import { Heading, Paragraph } from "../../atoms";

const AllParticipantsDisplay = () => {
  const [participants, setParticipants] = useState([]);

  const authors = participants;
  const authorsRepresentation = [];
  const defendants = [];
  const defendantsRepresentation = [];

  const hasAuthors = authors.length > 0 || authorsRepresentation.length > 0;
  const hasDefendants = defendants.length > 0 || defendantsRepresentation.length > 0;

  const path = '';

  useEffect(() => {
    setParticipants(["Hello World"]);
  }, []);

  return (
    <div>
      <div>
        <Heading type='subSectionHeading'>Requerentes</Heading>
        {hasAuthors ? (
          <>
            {authors.map(author => (
              <ParticipantDisplay participant={author} />
            ))}
            {authorsRepresentation.map(authorRep => (
              <ParticipantDisplay participant={authorRep} />
            ))}
          </>
        ) : (
          <Paragraph>Nenhum requerido cadastrado</Paragraph>
        )}
      </div>
      <div>
        <Heading type='subSectionHeading'>Requeridos</Heading>
        {hasDefendants ? (
          <>
            {defendants.map(defendant => (
              <ParticipantDisplay participant={defendant} />
            ))}
            {defendantsRepresentation.map(defendantRep => (
              <ParticipantDisplay participant={defendantRep} />
            ))}
          </>
        ) : (
          <Paragraph>Nenhum requerido cadastrado.</Paragraph>
        )}
      </div>
    </div>
  );
};

export { AllParticipantsDisplay };