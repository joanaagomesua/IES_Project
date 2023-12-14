package pt.deti.ies.agendasaramago.auth.controllers;

import pt.deti.ies.agendasaramago.auth.payload.request.LoginRequest;
import pt.deti.ies.agendasaramago.auth.payload.response.JwtResponse;
import pt.deti.ies.agendasaramago.auth.security.jwt.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")



@PostMapping("/signin")
