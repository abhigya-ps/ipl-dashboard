package io.abhigya.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.abhigya.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);
}
