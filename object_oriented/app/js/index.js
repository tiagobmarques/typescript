import { InvoiceRepository } from './repository/InvoiceRepository.js';
import { ParticipantRepository } from './repository/ParticipantRepository.js';
import { ParticipantEntity } from './models/ParticipantEntity.js';
import { UserRepository } from './repository/UserRepository.js';
import { UserEntity } from './models/UserEntity.js';
// Participant
const newParticipant = new ParticipantEntity(5, "Carlos", 840005, "CPF", "32165498745");
const participantRepository = new ParticipantRepository();
participantRepository.save(newParticipant);
// User
const newUser = new UserEntity(3, "Rafael", "rafaelbm", "12345");
const userRepository = new UserRepository();
userRepository.save(newUser);
// OutPut
console.log("All Participants: ", participantRepository.findAll());
console.log("All Users: ", userRepository.findAll());
console.log("-------------------------------------");
console.log("Find Participant by id: ", participantRepository.findById(3));
console.log("Find User by id: ", userRepository.findById(2));
console.log("-------------------------------------");
console.log("Deleting by id Tiago and Samira in ParticipantRepository...");
participantRepository.delete(1);
participantRepository.delete(2);
console.log("All Participants afeter deleting: ", participantRepository.findAll());
console.log("Deleting by id Samira in UserRepository...");
userRepository.delete(2);
console.log("All Users afeter deleting: ", userRepository.findAll());
console.log("-------------------------------------");
console.log("Update Valentina to Valentina Marques");
let valentinaUpdated = participantRepository.findById(3);
valentinaUpdated.name = "Valentina Marques";
valentinaUpdated.registrationCode = 999999;
participantRepository.update(3, valentinaUpdated);
console.log("Valentina Updated: ", participantRepository.findById(3));
console.log("Update Tiago to Tiago Marques");
let tiagoUpdated = userRepository.findById(1);
tiagoUpdated.name = "Tiago Marques";
userRepository.update(1, tiagoUpdated);
console.log("Tiago Updated: ", userRepository.findById(1));
console.log("-------------------------------------");
// Invoice
const invoiceRepository = new InvoiceRepository();
console.log(invoiceRepository.findAll());
