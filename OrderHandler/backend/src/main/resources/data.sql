insert into user (username, password, enabled, role) values ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_ADMIN');
insert into user (username, password, enabled, role) values ('user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER');

insert into request (user_id, title, status, description, created_at, updated_at) values (1, 'Baboslecso', 'COOKED', 'Falun elmegy...', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
/*insert into request (user_id, title, status, description, created_at, updated_at) values (1, 'kakaos Billentyuzet', 'NEW', 'A billentyuzetbe kakao kerult', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into request (user_id, title, status, description, created_at, updated_at) values (2, 'eger gorgo', 'INPROGRESS', 'Az eger gorgoje elgurult', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into request (user_id, title, status, description, created_at, updated_at) values (2, 'WIFI', 'COOKED', 'Nem jo a WiFi', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into request (user_id, title, status, description, created_at, updated_at) values (2, 'DeleteMe01', 'COOKED', 'Nem jo a WiFi', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into request (user_id, title, status, description, created_at, updated_at) values (2, 'DeleteMe02', 'COOKED', 'Nem jo a WiFi', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
*/
insert into message (request_id, text, created_at, updated_at) values (1, 'message11', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
/*insert into message (request_id, text, created_at, updated_at) values (2, 'message21', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into message (request_id, text, created_at, updated_at) values (2, 'message22', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into message (request_id, text, created_at, updated_at) values (3, 'message31', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
*/

insert into label (text, created_at, updated_at) values ('label1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
/*insert into label (text, created_at, updated_at) values ('label2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
*/
insert into request_labels (requests_id, labels_id) values (1, 1);
/*insert into request_labels (requests_id, labels_id) values (1, 2);
insert into request_labels (requests_id, labels_id) values (3, 2);
insert into request_labels (requests_id, labels_id) values (2, 1);
insert into request_labels (requests_id, labels_id) values (2, 1);
insert into request_labels (requests_id, labels_id) values (1, 4);
*/
