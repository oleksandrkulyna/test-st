import {Node} from "neo4j-driver";

export class SmartTagEntity {
    constructor(private readonly node: Node) {
    }

    getId(): number {
        return (<Record<string, any>>this.node.properties).id
    }

    getName(): string {
        return (<Record<string, any>>this.node.properties).name
    }
}