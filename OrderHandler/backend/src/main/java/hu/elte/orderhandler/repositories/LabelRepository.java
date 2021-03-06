package hu.elte.orderhandler.repositories;

import hu.elte.orderhandler.entities.Label;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabelRepository extends CrudRepository<Label, Integer> {
    
}
