import { getHealthStatus } from "./health";

describe('should return healthStatus function', () => {
    it("should return 'healthy', if health is more than 50", () => {
        expect(getHealthStatus({ name: "Mage", health: 90 })).toBe("healthy");
    });
    
    it("should return 'wounded', if health is between 50 and 15", () => {
        expect(getHealthStatus({ name: "Warrior", health: 30 })).toBe("wounded");
    });
    
    it("should return 'critical', if health is less than 15", () => {
        expect(getHealthStatus({ name: "Rogue", health: 10 })).toBe("critical");
    });
}); 