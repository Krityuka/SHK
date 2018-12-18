package hu.elte.orderhandler.controllers;

import hu.elte.orderhandler.entities.Request;
import hu.elte.orderhandler.entities.Label;
import hu.elte.orderhandler.entities.Message;
import hu.elte.orderhandler.entities.User;
import hu.elte.orderhandler.repositories.RequestRepository;
import hu.elte.orderhandler.repositories.LabelRepository;
import hu.elte.orderhandler.repositories.MessageRepository;
import hu.elte.orderhandler.security.AuthenticatedUser;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestController {
    
    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private MessageRepository messageRepository;
    
    @Autowired
    private LabelRepository labelRepository;
    
    @Autowired
    private AuthenticatedUser authenticatedUser;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Request>> getAll() {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ROLE_ADMIN)) {
            return ResponseEntity.ok(requestRepository.findAll());
        } else {
			return ResponseEntity.ok(requestRepository.findAll());
            //return ResponseEntity.ok(requestRepository.findAllByUser(user));
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Request> get(@PathVariable Integer id) {
        Optional<Request> request = requestRepository.findById(id);
        if (request.isPresent()) {
            return ResponseEntity.ok(request.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Request> post(@RequestBody Request request) {
        User user = authenticatedUser.getUser();
        request.setUser(user);
        Request savedRequest = requestRepository.save(request);
        return ResponseEntity.ok(savedRequest);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Request> put(@RequestBody Request request, @PathVariable Integer id) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            request.setId(id);
            return ResponseEntity.ok(requestRepository.save(request));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            requestRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}/messages")
    public ResponseEntity<Iterable<Message>> messages(@PathVariable Integer id) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            return ResponseEntity.ok(oRequest.get().getMessages());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/messages")
    public ResponseEntity<Message> insertMessage(@PathVariable Integer id, @RequestBody Message message) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            Request request = oRequest.get();
            message.setRequest(request);
            return ResponseEntity.ok(messageRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/labels")
    public ResponseEntity<Iterable<Label>> labels(@PathVariable Integer id) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            return ResponseEntity.ok(oRequest.get().getLabels());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/labels")
    public ResponseEntity<Label> insertLabel(@PathVariable Integer id, @RequestBody Label label) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            Request request = oRequest.get();
//            label.setRequests(Arrays.asList(request));
            Label newLabel = labelRepository.save(label);
            request.getLabels().add(newLabel);
            requestRepository.save(request);  // have to trigger from the @JoinTable side
            return ResponseEntity.ok(newLabel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}/labels")
    public ResponseEntity<Iterable<Label>> modifyLabels(@PathVariable Integer id, @RequestBody List<Label> labels) {
        Optional<Request> oRequest = requestRepository.findById(id);
        if (oRequest.isPresent()) {
            Request request = oRequest.get();
            
            // if we would like to add new labels as well
            for (Label label: labels) {
                if (label.getId() == null) {
                    labelRepository.save(label);
                }
            }
            
            request.setLabels(labels);
            requestRepository.save(request);
            return ResponseEntity.ok(labels);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	
}
