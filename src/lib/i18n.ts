export type Language = "en" | "jp";

export const dictionaries = {
    en: {
        hero: {
            role: "Senior Full-Stack Engineer",
            description: "Building resilient distributed systems and high-performance web applications.",
            cta: "View Projects",
            status: "Open to Work in Tokyo",
        },
        nav: {
            about: "About",
            stack: "Tech Stack",
            projects: "Projects",
            contact: "Contact",
        },
        sections: {
            stack: "Technical Arsenal",
            projects: "Engineering Case Studies",
            readiness: "Japan Readiness",
            viewCaseStudy: "View Case Study",
            systemArch: "System Architecture",
        },
        projects: {
            ecommerce: {
                title: "E-Commerce Microservices",
                desc: "A high-performance, fault-tolerant e-commerce backend built with Go and gRPC. Designed to handle high concurrency with event-driven architecture using Apache Kafka.",
            },
            distributed: {
                label: "DISTRIBUTED SYSTEMS",
            }
        },
    },
    jp: {
        hero: {
            role: "シニアフルスタックエンジニア",
            description: "堅牢な分散システムと高性能Webアプリケーションの構築",
            cta: "プロジェクトを見る",
            status: "東京での就業準備完了",
        },
        nav: {
            about: "私について",
            stack: "技術スタック",
            projects: "プロジェクト",
            contact: "お問い合わせ",
        },
        sections: {
            stack: "技術スキル",
            projects: "開発実績",
            readiness: "日本での適応性",
            viewCaseStudy: "ケーススタディを見る",
            systemArch: "システムアーキテクチャ",
        },
        projects: {
            ecommerce: {
                title: "Eコマースマイクロサービス",
                desc: "GoとgRPCで構築された高性能でフォールトトレラントなEコマースバックエンド。Apache Kafkaを使用したイベント駆動アーキテクチャにより、高い並行性を処理するように設計されています。",
            },
            distributed: {
                label: "分散システム",
            }
        },
    },
};
