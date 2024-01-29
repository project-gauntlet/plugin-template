import { ReactElement } from 'react';
import { Detail } from "@project-gauntlet/api/components";

export default function TemplateView(): ReactElement {
    return (
        <Detail>
            <Detail.Content>
                <Detail.Content.Paragraph>
                    Hello Gauntlet!
                    Deno Version: {Deno.version.deno}
                </Detail.Content.Paragraph>
            </Detail.Content>
        </Detail>
    );
};

