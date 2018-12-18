package hu.elte.orderhandler.repositories;

import hu.elte.orderhandler.entities.Request;
import hu.elte.orderhandler.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends CrudRepository<Request, Integer> {
    public Iterable<Request> findAllByUser(User user);
}