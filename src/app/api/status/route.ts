import { NextResponse } from 'next/server';

export async function GET() {
    // Simulate distributed system health check
    const health = {
        status: "optimal",
        region: "ap-northeast-1", // Tokyo
        environment: "distributed-mock",
        latency: "12ms",
        services: {
            database: "connected",
            redis: "ready",
            kafka: "consumers-active"
        }
    };

    return NextResponse.json(health);
}
