package hu.elte.orderhandler.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    private String title;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    
    @Column
    private String description;
    
    /*@Column
    @NotNull
    private String location;*/
    
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime created_at;
    
    @Column
    @UpdateTimestamp
    private LocalDateTime updated_at;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User user;
    
    @OneToMany(mappedBy = "request")
    private List<Message> messages;

    @ManyToMany
    @JoinTable
    private List<Label> labels;
    
    public enum Status {
        NEW, INPROGRESS, COOKED
    }
}