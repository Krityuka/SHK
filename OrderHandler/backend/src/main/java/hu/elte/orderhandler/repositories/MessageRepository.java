package hu.elte.orderhandler.repositories;

import hu.elte.orderhandler.entities.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MessageRepository extends CrudRepository<Message, Integer> {
    
}
